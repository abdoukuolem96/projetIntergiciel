import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateHotelComponent} from './create-hotel/create-hotel.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HotelDetailsComponent} from './hotel-details/hotel-details.component';
import {HotelListComponent} from './hotel-list/hotel-list.component';
import { CreateCustomerComponent } from './create-vol/create-vol.component';
import { CustomerDetailsComponent } from './vol-details/vol-details.component';
import { CustomersListComponent } from './vol-list/vol-list.component';
import { SearchCustomersComponent } from './search-vol/search-vol.component';
import {UpdateHotelComponent} from './update-hotel/update-hotel.component';
import {MakeReservationComponent} from './make-reservation/make-reservation.component';
import {ReservationDetailsComponent} from './reservation-details/reservation-details.component';
import {DatePipe} from "@angular/common";
import {ReservationListComponent} from './reservation-list/reservation-list.component';
import { CreatePellerinComponent } from './create-pellerin/create-pellerin.component';
import { PellerinDetailsComponent } from './pellerin-details/pellerin-details.component';
import { PellerinListComponent } from './pellerin-list/pellerin-list.component';
import { UpdatePellerinComponent } from './update-pellerin/update-pellerin.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CreateHotelComponent,
    HotelDetailsComponent,
    HotelListComponent,
    UpdateHotelComponent,
    MakeReservationComponent,
    ReservationDetailsComponent,
    ReservationListComponent,
    CreatePellerinComponent,
    PellerinDetailsComponent,
    PellerinListComponent,
    UpdatePellerinComponent,
    NavComponent,CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    SearchCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
