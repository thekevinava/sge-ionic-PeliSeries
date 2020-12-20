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
  loggedIn = false;

  componentes: any;
  categorias: any;

  constructor(private dataService: DataService, public userData: UserData, public router: Router) {
    this.componentes = [];
    this.categorias = [];
   }

  ngOnInit() {
    this.dataService.getMenuOpts().subscribe(res => {
      this.componentes = res;
    });
    this.dataService.getCategorias().subscribe(res => {
      this.categorias = res;
    });

    this.checkLoginStatus();
    this.listenForLoginEvents();
  }

  
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
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/');
    });
  }

}
