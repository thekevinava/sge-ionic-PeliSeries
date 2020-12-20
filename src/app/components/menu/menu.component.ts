import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  // componentes: Observable<Componente[]>;
  // categorias: Observable<Category[]>;
  componentes: any;
  categorias: any;

  constructor(private dataService: DataService) {
    this.componentes = [];
    this.categorias = [];
   }

  ngOnInit() {
    // this.componentes = this.dataService.getMenuOpts();
    // this.categorias = this.dataService.getCategory();
    this.dataService.getMenuOpts().subscribe(res => {
      console.log(res)
      this.componentes = res;
    });
    this.dataService.getCategorias().subscribe(res => {
      this.categorias = res;
    });
  }

}
