import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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

  categoriesData: any;

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

  constructor(public dataService: DataService, public userData: UserData, public router: Router, private toastController: ToastController) { 
    this.categoriesData = [];
  }
  
  ngOnInit() {
    this.getUsername();

    this.dataService.getCategories().subscribe(res => {
      this.categoriesData = res;
    });
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  submitForm() {
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
      this.mostrarToast();
    });
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Has añadido la serie correctamente.',
      duration: 2000
    });
    toast.present();
  }

}
