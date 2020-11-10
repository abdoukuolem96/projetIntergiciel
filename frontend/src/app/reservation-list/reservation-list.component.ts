import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Reservation} from '../model/reservation.component';
import {ReservationService} from '../services/reservation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: Observable<Reservation[]>;

  constructor(private reservationService: ReservationService, private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.reservations = this.reservationService.viewAllReservation();
  }

  removeReservation(id_reservation: number) {
    this.reservationService.removeReservation(id_reservation)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  reservationDetails(id_reservation: number) {
    this.router.navigate(['reservationDetails', id_reservation]);
  }
}
