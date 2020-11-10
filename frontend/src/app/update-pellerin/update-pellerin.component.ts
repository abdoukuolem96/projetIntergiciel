import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pellerin} from "../model/pellerin.component";
import {PellerinService} from "../services/pellerin.service";

@Component({
  selector: 'app-update-pellerin',
  templateUrl: './update-pellerin.component.html',
  styleUrls: ['./update-pellerin.component.css']
})
export class UpdatePellerinComponent implements OnInit {
  numPasseport: number;
  pellerin: Pellerin;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private pellerinService: PellerinService) {
  }

  ngOnInit() {
    this.pellerin = new Pellerin();
    this.numPasseport = this.route.snapshot.params['numPasseport'];
    this.pellerinService.viewPellerin(this.numPasseport)
      .subscribe(data => {
        console.log(data)
        this.pellerin = data;
      }, error => console.log(error));
  }

  modifyPellerin() {
    this.pellerinService.modifyPellerin(this.numPasseport, this.pellerin)
      .subscribe(data => console.log(data), error => console.log(error));
    this.pellerin = new Pellerin();
    this.gotoList();
  }

  onSubmit() {
    this.modifyPellerin();
  }

  gotoList() {
    this.router.navigate(['/pellerins']);
  }
}

