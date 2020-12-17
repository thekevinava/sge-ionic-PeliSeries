import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente, Serie } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Observable<Componente[]>;

  /* Variables para el Infinite Scroll*/
  series= [];
  items = [];
  cuenta: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
    /* leo el JSON de las series y lo guardo directamente en un array */
    this.dataService.getSerie().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        this.series.push(res[i]);
      }
      this.addMoreItems(); // Llamo a la variable que se encarga de publicar los elementos en home.page.html
    });
  }

  /* Leo los datos del home.page.html respecto al Infinite Scroll */
  loadData(event) {
    setTimeout(() => {
      console.log('Done'); 
      this.addMoreItems(); // Cargo más datos si existen
      event.target.complete(); // Completo la carga de datos
      if (this.series.length === this.cuenta) event.target.disabled = true; // Si he completado la carga, desactivo el Infinite Scroll
    }, 500);
  }

  addMoreItems() {
    for (let i = 0; i < 4; i++) {
      if (this.series.length === this.cuenta) return; // Si he completado la carga de datos, no añade más información innecesaria
      this.items.push(this.series[this.cuenta]);
      this.cuenta++;
    }
  }

}
