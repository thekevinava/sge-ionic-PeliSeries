import { Component, OnInit } from '@angular/core';
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
  serie: any;
  categorias: any;

  usuario = {
    slug: '',
    email: '',
    puntuacion: '',
    comentario: '',
    fecha: Date.now()
  };

  puntuaciones: any;

  comentariosSerie = [];

  /* Para la visualizacion de las diferentes pantallas */
  cardSerie = false;
  cardForm = true;
  cardComentarios = true;

  constructor(private route: ActivatedRoute, private dataService: DataService, private alertCtrl: AlertController, private toastController: ToastController, public router: Router) {
    this.categorias = [];
    this.series = [];
    this.puntuaciones = [];
  }

  ngOnInit() {
    this.dataService.getCategorias().subscribe(res => {
      this.categorias = res;
    });

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

    this.dataService.getComentarios().subscribe(res => {
      this.puntuaciones = res;
      for (let i = 0;i<this.puntuaciones.length;i++) {
        if (this.puntuaciones[i].slug === this.serie.slug) {
          this.comentariosSerie.push(this.puntuaciones[i]);
        }
      }
      this.comentariosSerie.sort((a,b): any => {
        if (a['fecha'] < b['fecha']) return 1;
        if (a['fecha'] > b['fecha']) return -1;
        return 0;
      });
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

  ejecutarFormulario(slugSerie) {
    this.comentariosSerie.push(this.usuario);
    /* Reordeno el listado de los comentarios */
    this.comentariosSerie.sort((a,b): any => {
      if (a['fecha'] < b['fecha']) return 1;
      if (a['fecha'] > b['fecha']) return -1;
      return 0;
    });
    this.usuario.slug = slugSerie;

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

    this.visualizaciones(false,true,true);
    this.mostrarToast();
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Has puntuado la serie correctamente.',
      duration: 2000
    });
    toast.present();
  }

  getFecha(fecha) {
    let date = new Date(fecha);
    return date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes();
  }

  visualizaciones(ficha,form,comens) {
    this.cardSerie = ficha;
    this.cardForm = form;
    this.cardComentarios = comens;
  }

  puntuacionTotal() {
    if (this.comentariosSerie.length>0) {
      let total = 0;
      for (let i = 0; i<this.comentariosSerie.length;i++) {
        total += this.comentariosSerie[i].puntuacion;
      }
      return total/this.comentariosSerie.length;
    }
    else return "Todavía no se ha puntuado";
  }

}
