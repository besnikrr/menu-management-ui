import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {NavComponent} from "./nav/nav.component";
import { SideNavComponent } from './side-nav/side-nav.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { ItemComponent } from './item/item.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MenuFormComponent } from './menu-form/menu-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    SideNavComponent,
    RegisterComponent,
    MenuComponent,
    ItemComponent,
    MainLayoutComponent,
    MenuFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
