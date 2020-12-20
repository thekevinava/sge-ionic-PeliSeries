import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.page.html',
  styleUrls: ['./serie.page.scss'],
})
export class SeriePage implements OnInit {
  slug: any;
  catSlug: any;
  series = [];
  serie: any;
  categorias = [];

  usuario = {
    slug: '',
    email: '',
    puntuacion: '',
    comentario: '',
    fecha: Date.now()
  };

  puntuaciones: any = [];

  cardSerie = false;
  cardForm = true;
  cardComentarios = true;

  constructor(private route: ActivatedRoute, private dataService: DataService, private alertCtrl: AlertController, private toastController: ToastController) { }

  ngOnInit() {
    this.dataService.getCategory().subscribe(res => {
      this.categorias = res;
    });
    /* Recojo las series del JSON */
    this.dataService.getSerie().subscribe((data: any) => {
      const serieSlug = this.route.snapshot.paramMap.get('serieSlug'); //Recojo el enrutamiento necesario para la línea 16 del archivo categories-routing.module */
      this.series = data; // Guardo las categorías

      if (data) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].slug === serieSlug) return this.serie = data[i]; // Guardo los datos de la categoría requerida
        }
      }
    });
  }

  /* Los datos para el slider */
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  mismaCategoria(cat) {
    for (let i = 0; i < this.categorias.length; i++) {
      if (cat == this.categorias[i].name) return this.catSlug = this.categorias[i].slug; // Si la categoría es la misma, devuelvo el slug de la categoría requerida
    }
  }

  puntuar() {
    this.cardSerie = true;
    this.cardForm = false;
  }

  ejecutarFormulario(slugSerie) {
    this.puntuaciones.push(this.usuario);
    this.usuario.slug = slugSerie;
    console.log(this.puntuaciones)

    /* Reinicio el formulario */
    this.usuario = {
      slug: '',
      email: '',
      puntuacion: '',
      comentario: '',
      fecha: null
    };

    this.cardSerie = false;
    this.cardForm = true;
    this.mostrarToast();
    this.saveText(JSON.stringify(this.puntuaciones), "/assets/filename.json");
  }

  // guardarPuntuacionesJSON(text, filename) {
  saveText(text, filename) {
    // var a = document.createElement('a');
    // a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
    // a.setAttribute('download', filename);
    // a.click()
  }
  // }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Has puntuado la serie correctamente.',
      duration: 2000
    });
    toast.present();
  }

  mostrarComentarios() {
    this.cardSerie = true;
    this.cardComentarios = false;
  }

}
