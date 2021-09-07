import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./shared/material/material.module";
import {NavComponent} from "./main-layout/nav/nav.component";
import { SideNavComponent } from './main-layout/side-nav/side-nav.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { ItemComponent } from './item/item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MenuFormComponent } from './menu/menu-form/menu-form.component';
import { ItemFormComponent } from './item/item-form/item-form.component';
import { UserProfileComponent } from './main-layout/user-profile/user-profile.component';
import { ItemToMenuFormComponent } from './menu/item-to-menu-form/item-to-menu-form.component';
import { MenuItemsComponent } from './menu/menu-items/menu-items.component';

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
    MenuFormComponent,
    ItemFormComponent,
    UserProfileComponent,
    ItemToMenuFormComponent,
    MenuItemsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
