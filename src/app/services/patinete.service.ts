import { Parking } from './../models/parking.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Patinete } from '../models/patinete.model';

@Injectable(
  { providedIn: 'root' }
)

export class PatineteService {

  private url: string;
  private urlPulicParking: string;

  constructor(private apiService: ApiService) {
    this.url = GLOBAL.url;
    this.urlPulicParking = GLOBAL.urlPulicParking;
  }

  savePatinete(patinete: Patinete): Observable<any> {
    return this.apiService.post(this.url + 'patinetes', patinete)
      .map(res => res);
  }

  getPatineteById(patineteId): Observable<any> {
    return this.apiService.get(this.url + 'patinetes/' + patineteId)
      .map(res => res);
  }

  getPatinetes(): Observable<any> {
    return this.apiService.get(this.url + 'patinetes')
      .map(res => res);
  }

  updatePatinete(id: String, patinete: any): Observable<any> {
    return this.apiService.put(this.url + 'patinetes/' + id, patinete)
      .map(res => res);
  }

  deletePatinete(id: String): Observable<any> {
    return this.apiService.delete(this.url + 'patinetes/' + id).map(res => res);
  }

}
