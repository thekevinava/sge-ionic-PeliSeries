import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category, Serie, Comentaries, MenuOpts } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  APIURL = 'http://localhost:3000/api/';
  // APIURL = 'https://json-peliseries.herokuapp.com/';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  /* GET */

  /**
   * Método para obtener todas las páginas del menu.
   * @return
   */
  getMenuOpts() {
    return this.http.get<MenuOpts[]>('/assets/data/menu.json')
  }

  /**
   * Método para obtener todas las categorías.
   * @return
   */
  getCategories() {
    return this.http.get<Category[]>(this.APIURL+'categories');
  }
  
  /**
   * 
   * @param slug Slug de la serie a buscar los comentarios
   */
  getComentarios(slug) {
    // return this.http.get<Comentaries[]>(this.APIURL+'series/'+serieSlug+'/comments');
    return this.http.get<Comentaries[]>(this.APIURL+'series/'+ slug +'/comments');
  }
  
  /**
   * Método para obtener todas las series.
   * @return
   */
  getSeries() {
    return this.http.get<Serie[]>(this.APIURL+'series');
  }


  getSerie(slug) {
    return this.http.get<Serie[]>(this.APIURL+'series/' + slug);
  }
  
  /**
   * Método para obtener los datos de una categoría determinada.
   * @param {string} slugCat - Slug de la categoría a obtener.
   * @return
   */
  getCategory(slugCat) {
    return this.http.get<Category[]>(this.APIURL+'categories' + '/' + slugCat);
  }


  /* POST */

  /**
   * Método para crear un comentario y almacenarlo.
   * @param {object} comentario - Todos los datos a guardar sobre el comentario nuevo.
   * @return
   */
  postComentario(slug,comentario) {
    return this.http.post<Comentaries>(this.APIURL + 'series/' + slug + '/comments', JSON.stringify(comentario), this.httpOptions);
  }
}
