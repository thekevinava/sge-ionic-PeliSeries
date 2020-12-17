import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Serie } from '../interfaces/interfaces';


const apiUrl = "/assets/data/series.json";

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Serie[]> {
    return this.http.get<Serie[]>('/assets/data/series.json');
  }
}
