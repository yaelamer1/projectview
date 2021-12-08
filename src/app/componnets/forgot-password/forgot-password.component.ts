import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  mail:string|any;
  message:string="password";
  errMess:string|any;
  constructor(private httpClient:HttpClient) { }
  
  ngOnInit(): void {
//  איך אני אדע אם הצליח למצוא בקומפוננטה של שליחת מייל
//     if(לא מוצא את המייל או התז)
// this.errMess="משתמש לא קיים במערכת באפשרותך להירשם לאתר";
  }

}
