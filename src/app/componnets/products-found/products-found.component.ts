import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/class/product';
import { ProductInShop } from 'src/app/class/productInShop';

@Component({
  selector: 'app-products-found',
  templateUrl: './products-found.component.html',
  styleUrls: ['./products-found.component.css']
})
export class ProductsFoundComponent implements OnInit {
  @Input()
  arr:ProductInShop[]=[];
  //displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  constructor(private httpClient:HttpClient) { }
  ngOnInit() {
    
    //להציג מתוך טבלת המוצרים את אותו מוצר לפי הסינונים מכל החנויות
    //אם לא קיים להשאיר הודעה שלא קיים
    //איך להציג כאן חיפוש של קומפוננטה אחרת
  }

}
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

/**
  * @title Styling columns using their auto-generated column names
 */
// @Component({
//   selector: 'table-column-styling-example',
//   styleUrls: ['table-column-styling-example.css'],
//   templateUrl: 'table-column-styling-example.html',
// })

// export class ProductsFoundComponent{


//   displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
//   dataSource = ELEMENT_DATA;
// }

