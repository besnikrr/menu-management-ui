import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Item} from "../../shared/models/Item";
import {ItemService} from "../../shared/services/item.service";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  form: any = {};
  item: Item = {
    name: '',
    price: 0,
    description: '',
  };
  constructor(private itemService: ItemService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCreateOrUpdate(item: any): void {
    //create menu
    console.log(item)
    if (!item.id) {
      console.log('hello1')
      this.itemService.create({
        name: this.item.name,
        price: this.item.price,
        description: this.item.description
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
      this.itemService.update(item.id, item).subscribe(data => {
        console.log(data)
      });
      this.dialog.closeAll();
    }
  }
}
