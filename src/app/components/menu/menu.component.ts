import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category, MenuOpts } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  /** @param {boolean} loggedIn - Seteo la variable a que no estoy conectado */
  loggedIn = false; 

  /* Variables elementos */
  components: Observable<MenuOpts[]>;
  categories: Observable<Category[]>;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    /* Al inicializar llamo las diferentes funciones */
    this.getComponents(); 
    this.getCategories();
  }

  /** 
   * Función para obtener los componentes del menú en todo momento mediante un método GET 
   */
  getComponents() {
    this.components = this.dataService.getMenuOpts();
  }

  /** 
   * Función para obtener las categorías en todo momento mediante un método GET 
   */
  getCategories() {
    this.categories = this.dataService.getCategories();
  }

}
