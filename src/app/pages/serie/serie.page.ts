import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.page.html',
  styleUrls: ['./serie.page.scss'],
})
export class SeriePage implements OnInit {
  slug: any;
  series = [];
  serie: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    /* Recojo las series del JSON */
    this.dataService.getSerie().subscribe((data: any) => {
      const serieSlug = this.route.snapshot.paramMap.get('serieSlug'); //Recojo el enrutamiento necesario para la línea 16 del archivo categories-routing.module */
      this.series = data; // Guardo las categorías

      if (data) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].slug === serieSlug) return this.serie = data[i]; // Guardo los datos de la categoría requerida
        }
      }
    });
  }

}
