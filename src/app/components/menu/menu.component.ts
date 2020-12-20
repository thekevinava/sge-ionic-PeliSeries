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
  dark = true;

  componentes: Observable<Componente[]>;
  categorias: Observable<Category[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
    this.categorias = this.dataService.getCategory();
  }

}
