import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private Url = 'http://localhost:7777/service-hotel/hotel/';
  // private Url = 'http://localhost:9092//hotel/';
  constructor(private http: HttpClient) {
  }

  viewHotel(id_hotel: number): Observable<any> {
    return this.http.get(`${this.Url}/viewHotel/${id_hotel}`);
  }

  addHotel(hotel: Object): Observable<Object> {
    return this.http.post(`${this.Url}/addHotel`, hotel);
  }

  modifyHotel(id_hotel: number, value: any): Observable<Object> {
    return this.http.put(`${this.Url}/updateHotel`, value);
  }

  removeHotel(id_hotel: number): Observable<any> {
    return this.http.delete(`${this.Url}/deleteHotel/${id_hotel}`, {responseType: 'text'});
  }

  viewAllHotel(): Observable<any> {
    return this.http.get(`${this.Url}/allHotel`);
  }

}
