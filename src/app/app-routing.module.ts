import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {MenuComponent} from "./menu/menu.component";
import {ItemComponent} from "./item/item.component";
import {MainLayoutComponent} from "./main-layout/main-layout.component";

const routes: Routes = [
  // {path: 'tasks', component: TasksListComponent},
  // {path: 'tasks/user', component: UserTasksComponent},
  // {path: 'tasks/form', component: TodoFormComponent},
  // {path: 'tasks/form/:id', component: TodoFormComponent},
  // {path: 'users', component: UsersListComponent},
  // {path: 'users/form', component: TodoUserFormComponent},
  // {path: 'users/form/:id', component: TodoUserFormComponent},

  // {path: 'users', component: UsersListComponent, children: [
  //     {path: 'form', component: TodoUserFormComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}},
  //     {path: 'form/:id', component: TodoUserFormComponent, canActivate: [RoleGuard], data: {expectedRole: 'admin'}}
  //   ]
  // },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: MainLayoutComponent},

  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
