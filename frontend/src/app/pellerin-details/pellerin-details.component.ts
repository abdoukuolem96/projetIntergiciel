import { Component, OnInit } from '@angular/core';
import {Pellerin} from "../model/pellerin.component";
import {ActivatedRoute, Router} from "@angular/router";
import {HotelService} from "../services/hotel.service";
import {PellerinService} from "../services/pellerin.service";

@Component({
  selector: 'app-pellerin-details',
  templateUrl: './pellerin-details.component.html',
  styleUrls: ['./pellerin-details.component.css']
})
export class PellerinDetailsComponent implements OnInit {
  numPasseport: number;
  pellerin: Pellerin;
  constructor(private route: ActivatedRoute, private router: Router,
              private pellerinService: PellerinService) {
  }

  ngOnInit() {
    this.pellerin = new Pellerin();

    this.numPasseport = this.route.snapshot.params['numPasseport'];

    this.pellerinService.viewPellerin(this.numPasseport)
      .subscribe(data => {
        console.log(data);
        this.pellerin = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['pellerins']);
  }
}

