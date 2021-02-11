import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category, Serie, Comentaries, MenuOpts } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  APIURL = 'http://localhost:3000/api/';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getMenuOpts() {
    return this.http.get<MenuOpts[]>('/assets/data/menu.json')
  }

  getCategories() {
    return this.http.get<Category[]>(`${this.APIURL}categories`);
  }
  
  getComentarios(slug: string) {
    return this.http.get<Comentaries[]>(`${this.APIURL}series/${slug}/comments`);
  }
  
  getSeries() {
    return this.http.get<Serie[]>(`${this.APIURL}series`);
  }

  getSerie(slug: string) {
    return this.http.get<Serie[]>(`${this.APIURL}series/${slug}`);
  }
  
  getCategory(slug: string) {
    return this.http.get<Category[]>(`${this.APIURL}categories/${slug}`);
  }

  postComentario(slug: string, comentario: Comentaries) {
    return this.http.post<Comentaries>(`${this.APIURL}series/${slug}/comments`, JSON.stringify(comentario), this.httpOptions);
  }
}
