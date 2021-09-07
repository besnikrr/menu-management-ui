import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/User";
import {TokenStorageService} from "../../shared/services/token-storage.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  currentUser: any;

  constructor(private token: TokenStorageService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  logout() {
    this.token.signOut();
    this.dialog.closeAll();
    this.router.navigate(['/login'])
  }

}
