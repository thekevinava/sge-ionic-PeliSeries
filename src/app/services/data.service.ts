import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category, Serie, Comentaries, MenuOpts } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  jsonURL = 'http://localhost:3000/';
  // jsonURL = 'https://json-peliseries.herokuapp.com/';

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
    return this.http.get<MenuOpts[]>(this.jsonURL+'menu');
  }

  /**
   * Método para obtener todas las categorías.
   * @return
   */
  getCategories() {
    return this.http.get<Category[]>(this.jsonURL+'categorias');
  }
  
  /**
   * Método para obtener todos los comentarios.
   * @return
   */
  getComentarios() {
    return this.http.get<Comentaries[]>(this.jsonURL+'comentarios');
  }
  
  /**
   * Método para obtener todas las series.
   * @return
   */
  getSeries() {
    return this.http.get<Serie[]>(this.jsonURL+'series');
  }
  
  /**
   * Método para obtener los datos de una categoría determinada.
   * @param {number} idCat - ID de la categoría a obtener.
   * @return
   */
  getCategory(idCat) {
    return this.http.get<Category[]>(this.jsonURL+'categorias' + '/' + idCat);
  }

  /** 
   * Método para obtener los datos de una serie determinada.
   * @param {number} idSer - ID de la serie a obtener.
   * @return
   */
  getSerie(idSer) {
    return this.http.get<Serie[]>(this.jsonURL+'series' + '/' + idSer);
  }

  /* POST */

  /**
   * Método para crear un comentario y almacenarlo.
   * @param {object} comentario - Todos los datos a guardar sobre el comentario nuevo.
   * @return
   */
  postComentario(comentario) {
    return this.http.post<Comentaries>(this.jsonURL+'comentarios', JSON.stringify(comentario), this.httpOptions);
  }

  /**
   * Método para crear una categoría y almacenarla.
   * @param {object} category - Todos los datos a guardar sobre la categoría nueva.
   * @return
   */
  createCategory(category) {
    return this.http.post<Category[]>(this.jsonURL+'categorias', JSON.stringify(category), this.httpOptions);
  }

  /**
   * Método para crear una serie y almacenarla.
   * @param {object} serie - Todos los datos a guardar sobre la serie nueva.
   * @return
   */
  createSerie(serie) {
    return this.http.post<Serie[]>(this.jsonURL+'series', JSON.stringify(serie), this.httpOptions);
  }

  /* PUT */

  /** 
   * Método para editar una categoría.
   * @param {number} idCat - ID de la categoría a editar
   * @param {object} category - Los datos nuevos de la categoría a editar
   * @return
   */
  updateCategory(idCat,category) {
    return this.http.put<Category[]>(this.jsonURL+'categorias' + '/' + idCat, JSON.stringify(category), this.httpOptions);
  }

  /**
   * Método para editar una serie.
   * @param {number} idSer - ID de la serie a editar.
   * @param {object} serie - Los datos nuevos de la serie a editar.
   * @return
   */
  updateSerie(idSer,serie) {
    return this.http.put<Serie[]>(this.jsonURL+'series' + '/' + idSer, JSON.stringify(serie), this.httpOptions);
  }

  /* DELETE */

  /** 
   * Método para eliminar una serie.
   * @param {number} idSer - ID de la serie a eliminar.
   * @return
   */
  deleteSerie(idSer) {
    return this.http.delete<Serie[]>(this.jsonURL+'series' + '/' + idSer, this.httpOptions);
  }

  /**
   * Método para eliminar una categoría.
   * @param {number} idCat - ID de la categoría a eliminar.
   * @return
   */
  deleteCategory(idCat) {
    return this.http.delete<Category[]>(this.jsonURL+'categorias' + '/' + idCat, this.httpOptions);
  }

  /**
   * Método para eliminar un comentario.
   * @param {number} idCom - ID del comentario a eliminar.
   * @return
   */
  deleteComment(idCom) {
    return this.http.delete<Comentaries[]>(this.jsonURL+'comentarios' + '/' + idCom, this.httpOptions);
  }
}
