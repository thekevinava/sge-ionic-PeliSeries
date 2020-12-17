import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente, Serie } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json')
  }

  getSerie() {
    return this.http.get<Serie[]>('/assets/data/series.json')
  }
  
}
