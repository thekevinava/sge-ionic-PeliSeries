import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { UserData } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  username: any;
  serieData: any;
  commentsData: any;
  commentsSerie: any;

  id: any;

  constructor(private dataService: DataService, private userData: UserData, private activatedRoute: ActivatedRoute, private toastController: ToastController) { 
    this.serieData = [];
    this.commentsData = [];
    this.commentsSerie = [];
  }

  ngOnInit() {
    this.getUsername();
    this.id = this.activatedRoute.snapshot.params["serieID"];
    this.dataService.getSerie(this.id).subscribe(res => {
      this.serieData = res;
    });

    this.getComentarios();
  }

  getComentarios() {
    this.dataService.getComentarios().subscribe(res => {
      this.commentsData = res;
      for (let i = 0; i<this.commentsData.length;i++) {
        if (this.serieData.slug === this.commentsData[i].slug) {
          this.commentsSerie.push(this.commentsData[i]);
        }
      }
    });
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  getFecha(fecha) {
    let date = new Date(fecha);
    return date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes();
  }

  delete(item) {
    this.dataService.deleteComment(item.id).subscribe(res => {
      this.commentsSerie = []; // Reinicio el array
      this.getComentarios();
      this.mostrarToast();
    });
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Has eliminado el comentario correctamente.',
      duration: 2000
    });
    toast.present();
  }

}
