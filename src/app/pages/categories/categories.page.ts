import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categorias: any[] = [];



  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCategory().subscribe(res => {
      this.categorias = res;
    });
  }

}
