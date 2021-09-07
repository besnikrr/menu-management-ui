import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../shared/services/token-storage.service";
import {MatDialog} from "@angular/material/dialog";
import {UserProfileComponent} from "../user-profile/user-profile.component";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentUser: any;
  constructor(private token: TokenStorageService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  openProfileModal() {
    const dialogRef = this.dialog.open(UserProfileComponent)
    dialogRef.componentInstance.currentUser = this.currentUser;
  }

}
