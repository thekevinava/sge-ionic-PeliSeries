import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Category, Componente, Serie, Comentaries } from '../interfaces/interfaces';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


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

  /* Diferentes respuestas a errores */
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  constructor(private http: HttpClient) { }

  getMenuOpts(): Observable<Componente> {
    return this.http
      .get<Componente>(this.jsonURL+'menu')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getComentarios(): Observable<Comentaries> {
    return this.http
      .get<Comentaries>(this.jsonURL+'comentarios')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getSeries(): Observable<Serie> {
    return this.http
      .get<Serie>(this.jsonURL+'series')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteSerie(id) {
    return this.http.delete<Serie>(this.jsonURL+'series' + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createSerie(serie): Observable<Serie> {
    return this.http
      .post<Serie>(this.jsonURL+'series', JSON.stringify(serie), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getSerie(id): Observable<Serie> {
    return this.http.get<Serie>(this.jsonURL+'series' + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateSerie(id,serie): Observable<Serie> {
    return this.http.put<Serie>(this.jsonURL+'series' + '/' + id, JSON.stringify(serie), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getCategorias(): Observable<Category> {
    return this.http
      .get<Category>(this.jsonURL+'categorias')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getCategory(id): Observable<Category> {
    return this.http.get<Category>(this.jsonURL+'categorias' + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateCategory(id,category): Observable<Category> {
    return this.http.put<Category>(this.jsonURL+'categorias' + '/' + id, JSON.stringify(category), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  createCategory(category): Observable<Category> {
    return this.http
      .post<Category>(this.jsonURL+'categorias', JSON.stringify(category), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteCategory(id) {
    return this.http.delete<Category>(this.jsonURL+'categorias' + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  postComentario(comentario) {
    return this.http.post<Comentaries>(this.jsonURL+'Comentaries', JSON.stringify(comentario), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteComment(id) {
    return this.http.delete<Comentaries>(this.jsonURL+'Comentaries' + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
