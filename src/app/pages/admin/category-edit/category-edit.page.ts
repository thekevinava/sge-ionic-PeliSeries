import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { UserData } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.page.html',
  styleUrls: ['./category-edit.page.scss'],
})
export class CategoryEditPage implements OnInit {
  username: any;
  categoryData: any;
  id: any;


  constructor(private dataService: DataService, private userData: UserData, private activatedRoute: ActivatedRoute, private toastController: ToastController) { 
    this.categoryData = [];
  }
  
  ngOnInit() {
    this.getUsername();
    this.id = this.activatedRoute.snapshot.params["categoryID"];
    this.dataService.getCategory(this.id).subscribe(res => {
      this.categoryData = res;
    });
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  update() {
    this.dataService.updateCategory(this.id, this.categoryData).subscribe(res => { 
      this.mostrarToast();
    });
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Has editado la categoría correctamente.',
      duration: 2000
    });
    toast.present();
  }

}
