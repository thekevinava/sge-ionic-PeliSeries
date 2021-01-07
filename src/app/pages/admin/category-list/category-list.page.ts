import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { UserData } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  username: string;

  categoriesData: any;

  constructor(private dataService: DataService, private userData: UserData, private toastController: ToastController) { 
    this.categoriesData = [];
  }

  ngOnInit() {
    this.getUsername();
    this.getCategories();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  getCategories() {
    this.dataService.getCategories().subscribe(res => {
      this.categoriesData = res;
    });
  }

  delete(item) {
    this.dataService.deleteCategory(item.id).subscribe(res => {
      this.getCategories();
      this.mostrarToast();
    });
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Has eliminado la categoría correctamente.',
      duration: 2000
    });
    toast.present();
  }

}
