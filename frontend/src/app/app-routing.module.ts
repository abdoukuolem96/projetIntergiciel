import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateHotelComponent} from './create-hotel/create-hotel.component';
import {HotelListComponent} from './hotel-list/hotel-list.component';
import {UpdateHotelComponent} from './update-hotel/update-hotel.component';
import {HotelDetailsComponent} from './hotel-details/hotel-details.component';
import {MakeReservationComponent} from "./make-reservation/make-reservation.component";
import {ReservationDetailsComponent} from "./reservation-details/reservation-details.component";
import {ReservationListComponent} from "./reservation-list/reservation-list.component";
import {PellerinListComponent} from "./pellerin-list/pellerin-list.component";
import {CreatePellerinComponent} from "./create-pellerin/create-pellerin.component";
import {UpdatePellerinComponent} from "./update-pellerin/update-pellerin.component";
import {PellerinDetailsComponent} from "./pellerin-details/pellerin-details.component";
import { CustomersListComponent } from './vol-list/vol-list.component';
import { CreateCustomerComponent } from './create-vol/create-vol.component';
import { SearchCustomersComponent } from './search-vol/search-vol.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'hotels', component: HotelListComponent},
  {path: 'addHotel', component: CreateHotelComponent},
  {path: 'updateHotel/:id_hotel', component: UpdateHotelComponent},
  {path: 'hotelDetails/:id_hotel', component: HotelDetailsComponent},
  {path: 'makeReservation', component: MakeReservationComponent},
  {path: 'reservationDetails/:id_reservation', component: ReservationDetailsComponent},
  {path: 'reservations', component: ReservationListComponent},
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'vol', component: CustomersListComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'findbyage', component: SearchCustomersComponent },
  {path: 'pellerins', component: PellerinListComponent},
  {path: 'addPellerin', component: CreatePellerinComponent},
  {path: 'updatePellerin/:numPasseport', component: UpdatePellerinComponent},
  {path: 'pellerinDetails/:numPasseport', component: PellerinDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [];
