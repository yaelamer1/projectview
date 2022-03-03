import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Category } from 'src/app/class/category';
import { City } from 'src/app/class/city';
import { Shop } from 'src/app/class/shop';
import { ShopService } from 'src/app/services/shop.service';


@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  myControl = new FormControl();
  formLogin: FormGroup = new FormGroup({});
  formSignin: FormGroup = new FormGroup({});
  arr: City[] = [];
  shop: Shop | any;
  myVar: boolean = false;
  stringErr: string = "";
  filteredOptions!: Observable<string[]>;
  constructor(private httpClient: HttpClient, private shopService: ShopService) { }

  ngOnInit(): void {
    this.httpClient.get<City[]>(`http://localhost:62631/api/cities`)
    .subscribe(x => {
      this.arr = x;
    }, x => { console.log(x); }, () => { });
    this.formLogin = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required])
    })
    this.formSignin = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      CityName: new FormControl('',[Validators.required]),
      Phone: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required])
    });
    this.shop = this.shopService.getShop();
    this.filteredOptions = this.formSignin.value['CityName'].valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value)),
    );
  }
  //סינון להשלמה אוטומטית
  private _filter(value: string): City[] {
    const filterValue = value.toLowerCase();

    this.arr=this.arr.filter(option => option.toLowerCase().includes(filterValue));
    return this.arr;
  }
  //שמירה של ההזדהות
  saveLogin() {
    this.httpClient.get(`http://localhost:62631/api/shop?Name=${this.formLogin.value["Name"]}
    &Password=${this.formLogin.value["Password"]}`)
    .subscribe(x => {
      console.log(x);
      this.stringErr = "";
      this.shopService.emitShop.emit(x);
      console.log(x);
      this.shop = this.shopService.getShop();
    }, x => {
      console.log("errr", x)
      this.stringErr = "המידע שהוקש שגוי, נא נסה שנית"
    }, () => { });
  }
  //שמירה של ההרשמה
  saveSignin() {
    this.httpClient.post(`http://localhost:62631/api/shop`, this.formSignin.value).subscribe(x => {
      this.shopService.emitShop.emit(x);
      console.log(x);
      this.shop = this.shopService.getShop();
      this.stringErr="ההרשמה בוצעה בהצלחה!!"

    }, x => { 
      console.log(x); 
      this.stringErr=String(x.error.Message); 

    }, () => { });
  }
  //ההצגה של ההרשמה
  signin() {
    this.myVar = true;
  }
}


