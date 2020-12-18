import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categoria: any;
  series = [];
  categorias = [];

  seriesFinal = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCategory().subscribe((data: any) => {
      const categorySlug = this.route.snapshot.paramMap.get('categorySlug');
      if (data) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].slug === categorySlug) return this.categoria = data[i];
        }
      }
    });

    this.dataService.getCategory().subscribe(res => {
      this.categorias = res;
    });

    this.dataService.getSerie().subscribe(res => {
      for (let i = 0; i<res.length;i++) {
        this.series.push(res[i]);
      }

      for (let j = 0; j<this.series.length;j++) {
        console.log("1")
        for (let k = 0; k<this.series[j].categories.length;k++) {
          console.log(this.series[j].categories[k], " + ",this.categoria.name)
          if(this.series[j].categories[k] === this.categoria.name) {
            this.seriesFinal.push(this.series[j]);
          }
        }
      }
    });

    this.todasSeries();

    
  }

  todasSeries() {
    console.log(this.series)
    // for (let j = 0; j<this.series.length;j++) {
    //   console.log("1")
    //   for (let k = 0; k<this.series[j].categories.length;k++) {
    //     console.log(this.series[j].categories[k], " + ",this.categoria.name)
    //     if(this.series[j].categories[k] === this.categoria.name) {
    //       this.seriesFinal.push(this.series[j]);
    //     }
    //   }
    // }
  }

}
