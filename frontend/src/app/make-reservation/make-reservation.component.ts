import {Component, OnInit} from '@angular/core';
import {Reservation} from '../model/reservation.component';
import {Observable} from "rxjs";
import {Hotel} from '../model/hotel.component';
import {HotelService} from '../services/hotel.service';
import {HttpClient, HttpParams} from "@angular/common/http";
// import {Reservation} from "../model/hotel.component";
// import {HotelService} from "../services/hotel.service";

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.css']
})
export class MakeReservationComponent implements OnInit {
  hotels: Observable<Hotel[]>;
  submitted: boolean;
  private SFurl: string;
  reservation: Reservation;

  constructor(private http: HttpClient,
              private hotelService: HotelService) {
  }

    ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.hotels = this.hotelService.viewAllHotel();
  }

  addScheduleFlight(reservation: Reservation, hotel, pellerin) {
    let form = new FormData();
    form.append("id_reservation", String(reservation.id_reservation))
    // form.append("hotel",String(reservation.hotel))
    // form.append("pellerin",String(reservation.pellerin))
    form.append("dateReservation", String(reservation.dateReservation));
    let params = new HttpParams()
      .set('hotel', hotel)
      .set('pellerin', pellerin)
    console.log(reservation);
    console.log(params.toString());
    // console.log(form);
    return this.http.post('http://localhost:9092/reservation/addReservation?', form, {params});
  }

  onSubmit() {
    this.submitted = true;
    // this.save();
  }


}

//   reservation: Reservation = new Reservation();
//   hotels: Observable<Hotel[]>;
//   submitted = false;
//   isValidDate: any;
//
//   constructor(private reservationService: ReservationService,
//               private hotelService: HotelService,
//               private router: Router) {
//   }
//
//
//   ngOnInit() {
//     this.reloadData();
//   }
//
//   reloadData() {
//     this.hotels = this.hotelService.viewAllHotel();
//   }
//
//   newReservation(): void {
//     this.submitted = false;
//     this.reservation = new Reservation();
//   }
//
//   save() {
//     this.reservationService.addReservation(this.reservation)
//       .subscribe(data => console.log(data), error => console.log(error));
//     this.reservation = new Reservation();
//     this.gotoList();
//   }
//
//   onSubmit() {
//     this.submitted = true;
//     this.save();
//   }
//
//   gotoList() {
//     this.router.navigate(['/makeReservation']);
//   }
//
//   validateDates(dateDebut: Date, dateFin: Date) {
//     if ((dateFin) > (dateDebut)) {
//       return true;
//     } else false;
//   }
//
//   makeReservation(id_reservation: number) {
//     this.router.navigate(['makeReservation', id_reservation]);
//   }
// }
//
