import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor(
    private http: HttpClient
  ) { }

getUsers() {
  return this.http.get('https://randomuser.me/api/?results=2');
}
}
