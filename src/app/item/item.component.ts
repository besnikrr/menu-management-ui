import { Component, OnInit } from '@angular/core';
import {ItemService} from "../services/item.service";
import {Item} from "../models/Item";
import {MatTableDataSource} from "@angular/material/table";

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

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getAll().subscribe(data => {
      this.items = data;
      this.dataSource = new MatTableDataSource<any>(data);
    })
  }

  updateItem(item: any) {
    this.itemService.update(this.currentItem.id, this.currentItem).subscribe(data => {
      console.log(data)
    })
  }

  deleteItem(item: any) {
    this.itemService.delete(this.currentItem.id)
      .subscribe(
        response => {
          console.log(response);
        })
  }

  openModalToCreate() {

  }
}
