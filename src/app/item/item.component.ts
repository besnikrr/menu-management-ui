import { Component, OnInit } from '@angular/core';
import {ItemService} from "../shared/services/item.service";
import {Item} from "../shared/models/Item";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {ItemFormComponent} from "./item-form/item-form.component";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items?: Item[];
  currentItem: Item = {};

  displayedColumns: string[] = ['name', 'price', 'description', 'edit', 'delete'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(private itemService: ItemService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getAll().subscribe(data => {
      this.items = data;
      this.dataSource = new MatTableDataSource<any>(data);
    })
  }

  deleteItem(menu: any) {
    this.itemService.delete(menu.id)
      .subscribe(
        response => {
          console.log(response);
          this.getItems();
      })
  }

  openModalToCreate() {
    const dialogRef = this.dialog.open(ItemFormComponent)
    this.reloadTable(dialogRef);
  }

  openModalToUpdate(item: any) {
    const dialogRef = this.dialog.open(ItemFormComponent);
    dialogRef.componentInstance.item = item;
    this.reloadTable(dialogRef)
  }

  private reloadTable(dialogRef: any) {
    dialogRef.afterClosed().subscribe(
      (result: any) => {
        this.getItems();
      }
    );
  }
}
