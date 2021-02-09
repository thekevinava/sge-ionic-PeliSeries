import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  slug: any; // Slug de la categoría mostrada en el card Serie
  categoria: any; // Los datos de la categoría a mostrar
  categorias: any; // Listado de categorías

  series: any; // Listado de series
  seriesCategoria = []; // Listados de series de la categoria requerida
  seriesFinal = []; // Listado de series a mostrar con Infinite Scroll

  cuenta: number = 0;


  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.categorias = [];
    this.series = [];
  }

  ngOnInit() {
    this.dataService.getCategories().subscribe(res => {
      this.categorias = res;
    });

    const categorySlug = this.route.snapshot.paramMap.get('categorySlug'); //Recojo el enrutamiento necesario para la línea 16 del archivo categories-routing.module
    this.dataService.getCategory(categorySlug).subscribe(res => {
      this.categoria = res; // Guardo las categorías
    });

    /* Recojo las series del JSON*/
    this.dataService.getSeries().subscribe(res => {
      this.series = res; // Primero recojo las series
      for (let i = 0; i < this.series.length; i++) {
        for (let j = 0; j < this.series[i].categories.length; j++) {
          if (this.series[i].categories[j] == this.categoria.name) {
            this.seriesCategoria.push(this.series[i]); // Recojo las series que tengan la misma categoria
          }
        }
      }
      this.addMoreItems(); // Llamo a la variable que se encarga de publicar los elementos en category.page.html
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