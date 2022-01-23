import { Routes } from "@angular/router";
import { LoginComponent } from "./componnets/public/login/login.component";
import { SigninComponent } from "./componnets/public/signin/signin.component";

export const arrPath: Routes = [
    {
        path: "login",
        component: LoginComponent
    }, {
        path: "signin",
        component: SigninComponent
    }

];