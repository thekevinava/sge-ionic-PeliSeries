import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserData } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  loggedIn = false; // Seteo la variable a que no estoy conectado

  /* Variables elementos */
  componentes: any;
  categorias: any;

  constructor(private dataService: DataService, private userData: UserData, private router: Router) {
    /* Inicializo las variables como Arrays */
    this.componentes = [];
    this.categorias = [];
   }

  ngOnInit() {
    /* Al inicializar llamo las diferentes funciones */
    this.getComponents(); // Obtiene los elementos del menú
    this.getCategories(); // Obtiene los elementos de las categorías

    this.checkLoginStatus();
    this.listenForLoginEvents();
  }

  getComponents() {
    /* Obtiene los elementos del menú mediante un método GET */
    this.dataService.getMenuOpts().subscribe(res => {
      this.componentes = res; // Guardo los elementos obtenidos en el array previamente inicializado
    });
  }

  /* Obtiene los elementos de las categorías mediante un método GET */
  getCategories() {
    this.dataService.getCategorias().subscribe(res => {
      this.categorias = res; // Guardo los elementos obtenidos en el array previamente inicializado
    });
  }

  /* ----- EXTRA ----- */

  /* Compruebo si estoy logueado */
  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn); 
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    /* Comprueba si está logueado o no */
    
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  /* Función para desconectarse */
  logout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/'); // Redirecciona a la ruta /
    });
  }

}
