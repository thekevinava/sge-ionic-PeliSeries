import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  slug: any;
  categoria: any;
  categorias = [];
  
  series = [];
  seriesCategoria = [];
  seriesFinal = [];

  cuenta: number = 0;
  // items = [];


  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    /* Recojo las categorías del JSON */
    this.dataService.getCategory().subscribe((data: any) => {
      const categorySlug = this.route.snapshot.paramMap.get('categorySlug'); //Recojo el enrutamiento necesario para la línea 16 del archivo categories-routing.module */
      this.categorias = data; // Guardo las categorías

      if (data) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].slug === categorySlug) return this.categoria = data[i]; // Guardo los datos de la categoría requerida
        }
      }
    });


    /* Recojo las series del JSON*/
    this.dataService.getSerie().subscribe(res => {
      for (let i = 0; i<res.length;i++) {
        this.series.push(res[i]); // Primero recojo las series
      }

      for (let j = 0; j<this.series.length;j++) {
        for (let k = 0; k<this.series[j].categories.length;k++) {
          if(this.series[j].categories[k] === this.categoria.name) {
            this.seriesCategoria.push(this.series[j]); // Recojo las series que tengan la misma categoria
          }
        }
      }
      /* Ordeno las series de más recientes a más antiguas */
      this.seriesCategoria.sort((a,b): any => {
        if (a['year'] < b['year']) return 1;
        if (a['year'] > b['year']) return -1;
        return 0;
      });
      this.addMoreItems(); // Llamo a la variable que se encarga de publicar los elementos en home.page.html
    });    
  }

    /* Leo los datos del home.page.html respecto al Infinite Scroll */
    loadData(event) {
      setTimeout(() => {
        console.log('Loaded'); 
        this.addMoreItems(); // Cargo más datos si existen
        event.target.complete(); // Completo la carga de datos
        if (this.seriesCategoria.length === this.cuenta) event.target.disabled = true; // Si he completado la carga, desactivo el Infinite Scroll
      }, 500);
    }
  
    addMoreItems() {
      for (let i = 0; i < 4; i++) {
        if (this.seriesCategoria.length === this.cuenta) return; // Si he completado la carga de datos, no añade más información innecesaria
        this.seriesFinal.push(this.seriesCategoria[this.cuenta]);
        this.cuenta++;
      }
    }

  /* Función para poder pasar la ruta al chip de la categoría */
  mismaCategoria(cat) {
    for (let i = 0; i < this.categorias.length; i++) {
      if (cat == this.categorias[i].name) return this.slug = this.categorias[i].slug; // Si la categoría es la misma, devuelvo el slug de la categoría requerida
    }
  }

}