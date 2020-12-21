import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { UserData } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.page.html',
  styleUrls: ['./category-create.page.scss'],
})
export class CategoryCreatePage implements OnInit {
  username: any;

  data = {
    name: null,
    slug: null,
    image: null
  }

  constructor(private dataService: DataService, private userData: UserData, private toastController: ToastController) { }

  ngOnInit() {
    this.getUsername();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  submitForm() {
    this.dataService.createCategory(this.data).subscribe(res => {
      /* Inicializo el array para agregar otra categoría */
      this.data = {
        name: null,
        slug: null,
        image: null
      }
      this.mostrarToast();
    });
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Has creado la categoría correctamente.',
      duration: 2000
    });
    toast.present();
  }

}
