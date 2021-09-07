import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../shared/services/menu.service";
import {Menu} from "../../shared/models/Menu";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent implements OnInit {

  form: any = {};
  menu: Menu = {
    name: '',
    description: ''
  };
  constructor(private menuService: MenuService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCreateOrUpdate(menu: any): void {
    //create menu
    console.log(menu)
    if (!menu.id) {
      console.log('hello1')
      this.menuService.create({
        name: this.menu.name,
        description: this.menu.description
      })
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          });
      this.dialog.closeAll();
    } else {
      console.log('hello2')
      this.menuService.update(menu.id, menu).subscribe(data => {
          console.log(data)
      });
      this.dialog.closeAll();
    }
  }

}
