import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Pellerin} from "../model/pellerin.component";
import {PellerinService} from "../services/pellerin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pellerin-list',
  templateUrl: './pellerin-list.component.html',
  styleUrls: ['./pellerin-list.component.css']
})
export class PellerinListComponent implements OnInit {
  pellerins: Observable<Pellerin[]>;

  constructor(private pellerinService: PellerinService, private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.pellerins = this.pellerinService.viewAllPellerin();
  }

  removePellerin(numPasseport: number) {
    this.pellerinService.removePellerin(numPasseport)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  pellerinDetails(numPasseport: number) {
    this.router.navigate(['pellerinDetails', numPasseport]);
  }

  modifyPellerin(numPasseport: number) {
    this.router.navigate(['updatePellerin', numPasseport]);
  }
}
