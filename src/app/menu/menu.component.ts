import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MenuService} from "../shared/services/menu.service";
import {Menu} from "../shared/models/Menu";
import {MatDialog} from "@angular/material/dialog";
import {MenuFormComponent} from "./menu-form/menu-form.component";
import {MenuItemsComponent} from "./menu-items/menu-items.component";
import {ItemToMenuFormComponent} from "./item-to-menu-form/item-to-menu-form.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus?: Menu[];
  currentMenu: Menu = {};

  displayedColumns: string[] = ['name', 'description', 'edit', 'delete', 'show_tasks'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(private menuService: MenuService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMenus()
  }

  getMenus(): void {
    this.menuService.getAll().subscribe(data => {
      this.menus = data;
      this.dataSource = new MatTableDataSource<any>(data);
    })
  }

  deleteMenu(menu: any) {
    this.menuService.delete(menu.id)
      .subscribe(
        response => {
          console.log(response);
          this.getMenus();
      })
  }

  openModalToCreate() {
    const dialogRef = this.dialog.open(MenuFormComponent)
    this.reloadTable(dialogRef);
  }

  openModalToUpdate(menu: any) {
    const dialogRef = this.dialog.open(MenuFormComponent);
    dialogRef.componentInstance.menu = menu;
    this.reloadTable(dialogRef)
  }

  private reloadTable(dialogRef: any) {
    dialogRef.afterClosed().subscribe(
      (result: any) => {
        this.getMenus();
      }
    );
  }

  showMenuItem(menu: any) {
    const dialogRef = this.dialog.open(MenuItemsComponent)
    dialogRef.componentInstance.items = menu.items;
    dialogRef.componentInstance.menuId = menu.id;
  }

  addItemToMenu() {
    const dialogRef = this.dialog.open(ItemToMenuFormComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.getMenus()
    })
  }
}
