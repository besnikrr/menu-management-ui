import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {MenuComponent} from "./menu/menu.component";
import {ItemComponent} from "./item/item.component";
import {MainLayoutComponent} from "./main-layout/main-layout.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'menus', component: MenuComponent, outlet: 'tables'},
  { path: 'items', component: ItemComponent, outlet: 'tables'},
  { path: 'home', component: MainLayoutComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
