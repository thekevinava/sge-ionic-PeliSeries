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
  }

}
