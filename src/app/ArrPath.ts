import { Routes } from "@angular/router";
import { LoginComponent } from "./componnets/login/login.component";
import { SigninComponent } from "./componnets/signin/signin.component";

export const arrPath: Routes = [
    {
        path: "login",
        component: LoginComponent
    }, {
        path: "signin",
        component: SigninComponent
    }

];