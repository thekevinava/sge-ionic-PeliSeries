import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { last } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { UserData } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-series-edit',
  templateUrl: './series-edit.page.html',
  styleUrls: ['./series-edit.page.scss'],
})
export class SeriesEditPage implements OnInit {
  username: any;
  serieData: any;
  id: any;
  images: any;
  categoriesData: any;


  constructor(private dataService: DataService, private userData: UserData, private activatedRoute: ActivatedRoute, private toastController: ToastController) { 
    this.serieData = [];
    this.images = "";
    this.categoriesData = [];
  }

  ngOnInit() {
    this.getUsername();
    this.id = this.activatedRoute.snapshot.params["serieID"];
    this.dataService.getSerie(this.id).subscribe(res => {
      this.serieData = res;
      for (let i = 0; i<this.serieData.images.length;i++) {
        console.log(this.serieData.images[i])
        this.images += this.serieData.images[i] + ',';
      }
      this.images = this.images.slice(0,-1); // Elimino la última coma
    });

    this.dataService.getCategories().subscribe(res => {
      this.categoriesData = res;
    });
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  update() {
    this.dataService.updateSerie(this.id, this.serieData).subscribe(res => { 
      this.mostrarToast();
    });
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Has editado la serie correctamente.',
      duration: 2000
    });
    toast.present();
  }

}
