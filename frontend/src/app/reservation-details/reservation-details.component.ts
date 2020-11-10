import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ReservationService} from '../services/reservation.service';
import {Reservation} from '../model/reservation.component';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  id_reservation: number;
  reservation: Reservation;

  constructor(private route: ActivatedRoute, private router: Router,
              private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.reservation = new Reservation();

    this.id_reservation = this.route.snapshot.params['id_reservation'];

    this.reservationService.viewReservation(this.id_reservation)
      .subscribe(data => {
        console.log(data);
        this.reservation = data;
      }, error => console.log(error));
  }

  // list() {
  //   this.router.navigate(['hotels']);
  // }
}

