import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { UserData } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.page.html',
  styleUrls: ['./series-list.page.scss'],
})
export class SeriesListPage implements OnInit {
  username: string;

  seriesData: any;

  constructor(private dataService: DataService, private userData: UserData, private toastController: ToastController) {
    this.seriesData = [];
  }

  ngOnInit() {
    this.getUsername();
    this.getSeries();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  getSeries() {
    this.dataService.getSeries().subscribe(res => {
      this.seriesData = res;
    });
  }

  delete(item) {
    this.dataService.deleteSerie(item.id).subscribe(res => {
      this.getSeries();
      this.mostrarToast();
    });
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Has eliminado la serie correctamente.',
      duration: 2000
    });
    toast.present();
  }

}