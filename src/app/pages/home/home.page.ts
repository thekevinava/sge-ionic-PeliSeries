import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

}
