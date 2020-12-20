import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  series: any;
  // series = [];

  serie: any;

  categorias: any;
  // categorias = [];

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

  constructor(private route: ActivatedRoute, private dataService: DataService, private alertCtrl: AlertController, private toastController: ToastController, public router: Router) {
    this.categorias = [];
    this.series = [];
  }

  ngOnInit() {
    // this.dataService.getCategory().subscribe(res => {
    //   this.categorias = res;
    // });
    this.dataService.getCategorias().subscribe(res => {
      this.categorias = res;
    });


    /* Recojo las series del JSON */
    // this.dataService.getSerie().subscribe((data: any) => {
    //   const serieSlug = this.route.snapshot.paramMap.get('serieSlug'); //Recojo el enrutamiento necesario para la línea 16 del archivo categories-routing.module */
    //   this.series = data; // Guardo las categorías

    //   if (data) {
    //     for (let i = 0; i < data.length; i++) {
    //       if (data[i].slug === serieSlug) return this.serie = data[i]; // Guardo los datos de la categoría requerida
    //     }
    //   }
    // });

    /* Recojo las series del JSON */
    this.dataService.getSeries().subscribe(res => {
      const serieSlug = this.route.snapshot.paramMap.get('serieSlug'); //Recojo el enrutamiento necesario para la línea 16 del archivo series.routing.module
      this.series = res; // Guardo las series

      if (this.series) {
        for (let i = 0; i<this.series.length;i++) {
          if (this.series[i].slug === serieSlug) return this.serie = this.series[i]; // Guardo los datos de la serie requerida
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

    this.dataService.postComentario(this.usuario).subscribe((response) => {
      // this.router.navigate['comentarios']
    });
    /* Reinicio el formulario */
    this.usuario = {
      slug: '',
      email: '',
      puntuacion: '',
      comentario: '',
      fecha: Date.now()
    };

    this.cardSerie = false;
    this.cardForm = true;
    this.mostrarToast();




  }

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
