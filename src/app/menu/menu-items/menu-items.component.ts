import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../shared/services/menu.service";
import {ItemToMenuFormComponent} from "../item-to-menu-form/item-to-menu-form.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {

  items: any;
  menuId: number | undefined;

  constructor(private menuService: MenuService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  removeItemFromMenu(itemId: number) {
    this.menuService.removeItem({menuId: this.menuId, itemId: itemId}).subscribe(() => {
      const item = this.items.find((it: any) => {
        if (it.id = itemId) {
          return it
        }
      })
      this.items.splice(this.items.indexOf(item), 1)
    });
  }

}
