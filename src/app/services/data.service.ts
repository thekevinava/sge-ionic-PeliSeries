import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Category, Componente, Serie, Comentarios } from '../interfaces/interfaces';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

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
      .get<Componente>('http://localhost:3000/menu')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getComentarios(): Observable<Comentarios> {
    return this.http
      .get<Comentarios>('http://localhost:3000/comentarios')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getSeries(): Observable<Serie> {
    return this.http
      .get<Serie>('http://localhost:3000/series')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getCategorias(): Observable<Category> {
    return this.http
      .get<Category>('http://localhost:3000/categorias')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  postComentario(comentario) {
    return this.http.post<Comentarios>('http://localhost:3000/comentarios', JSON.stringify(comentario), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
