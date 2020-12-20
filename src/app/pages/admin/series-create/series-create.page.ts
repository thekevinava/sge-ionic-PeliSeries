import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { UserData } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-series-create',
  templateUrl: './series-create.page.html',
  styleUrls: ['./series-create.page.scss'],
})
export class SeriesCreatePage implements OnInit {
  username: string;

  categories: any;
  images: any;

  data = {
    title: null,
    slug: null,
    year: null,
    sinopsis: null,
    seasons: null,
    episodes: null,
    categories: null,
    images: null
  }

  constructor(public dataService: DataService, public userData: UserData, public router: Router) { }
  
  ngOnInit() {
    this.getUsername();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  submitForm() {
    this.data.categories = this.categories.split(',');
    this.data.images = this.images.split(',');
    this.dataService.createSerie(this.data).subscribe(res => {
      this.data = {
        title: null,
        slug: null,
        year: null,
        sinopsis: null,
        seasons: null,
        episodes: null,
        categories: null,
        images: null
      }
    });
  }

}
