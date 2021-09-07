import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../shared/services/token-storage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
