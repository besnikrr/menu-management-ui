import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ItemService} from "../../shared/services/item.service";
import {MenuService} from "../../shared/services/menu.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-item-to-menu-form',
  templateUrl: './item-to-menu-form.component.html',
  styleUrls: ['./item-to-menu-form.component.scss']
})
export class ItemToMenuFormComponent implements OnInit {

  items: any;
  menus: any;
  form: FormGroup;
  menuName: string = '';
  itemName: string = '';

  constructor(private itemService: ItemService, private menuService: MenuService, private dialog: MatDialog) {
    this.form = new FormGroup({
      menu: new FormControl('', Validators.required),
      item: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.itemService.getAll().subscribe((items) => {
      this.items = items;
    });
    this.menuService.getAll().subscribe((menus) => {
      this.menus = menus
    });
  }

  addItemToMenu() {
    this.menuName = this.form.controls.menu.value;
    this.itemName = this.form.controls.item.value;
    const menu = this.menus.find((it: any) => {
      if (it.name === this.menuName) {
        return it;
      }
    })
    const item = this.items.find((it: any) => {
      if (it.name === this.itemName) {
        return it;
      }
    })
    this.menuService.addItem({menuId: menu.id, itemId: item.id}).subscribe((res) => {
      this.dialog.closeAll();
    })
  }
}
