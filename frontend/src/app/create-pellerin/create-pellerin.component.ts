import {Component, OnInit} from '@angular/core';
import {Pellerin} from "../model/pellerin.component";
import {Router} from "@angular/router";
import {PellerinService} from "../services/pellerin.service";

@Component({
  selector: 'app-create-pellerin',
  templateUrl: './create-pellerin.component.html',
  styleUrls: ['./create-pellerin.component.css']
})
export class CreatePellerinComponent implements OnInit {
  pellerin: Pellerin = new Pellerin();
  submitted = false;

  constructor(private pellerinService: PellerinService,
              private router: Router) {
  }

  ngOnInit() {
  }

  newPellerin(): void {
    this.submitted = false;
    this.pellerin = new Pellerin();
  }

  save() {
    this.pellerinService.addPellerin(this.pellerin)
      .subscribe(data => console.log(data), error => console.log(error));
    this.pellerin = new Pellerin();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/pellerins']);
  }
}

