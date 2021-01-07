import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { UserData } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.page.html',
  styleUrls: ['./serie.page.scss'],
})
export class SeriePage implements OnInit {
  /**
   * @param {any} username - Información acerca del usuario si está logueado
   */
  username: any;

  /**
   * @param {any} catSlug - 
   */
  catSlug: any;

  series: any;
  serie: any;
  categorias: any;

  /**
   * Array relacionado con el usuario que escribe un comentario.
   * @param {string} slug - URL de la serie que se va a comentar.
   * @param {string} email - Email del usuario que quiere poner un comentario.
   * @param {number} puntuacion - Puntuación obligatoria a dicha serie.
   * @param {string} comentario - Comentario a dicha serie.
   * @param {string} fecha - Fecha de publicación del comentario.
   */
  usuario = {
    slug: null,
    email: null,
    puntuacion: null,
    comentario: null,
    fecha: Date.now()
  };

  puntuaciones: any;

  comentariosSerie = [];

  /**
   * Visibilidad del apartado de la ficha de la serie.
   * @param cardSerie - False por defecto porque es la visualización principal.
   */
  cardSerie = false;

  /**
   * Visibilidad del apartado del formulario para puntuar la serie.
   * @param cardForm - True por defecto para ocultar la visibilidad.
   */
  cardForm = true;

  /**
   * Visibilidad del apartado de los comentarios de la serie.
   * @param cardComentarios - True por defecto para ocultar la visibilidad.
   */
  cardComentarios = true;

  constructor(private route: ActivatedRoute, private dataService: DataService, private alertCtrl: AlertController,
    private toastController: ToastController, private userData: UserData) {
    this.categorias = [];
    this.series = [];
    this.puntuaciones = [];
  }

  ngOnInit() {
    this.getUsername();

    /* Guardo las categorías. */
    this.dataService.getCategories().subscribe(res => {
      this.categorias = res;
    });

    /* Recojo las series del JSON. */
    this.dataService.getSeries().subscribe(res => {
      const serieSlug = this.route.snapshot.paramMap.get('serieSlug'); //Recojo el enrutamiento necesario para la línea 16 del archivo series.routing.module.
      this.series = res; // Guardo las series.

      if (this.series) {
        for (let i = 0; i < this.series.length; i++) {
          if (this.series[i].slug === serieSlug) return this.serie = this.series[i]; // Guardo los datos de la serie requerida.
        }
      }
    });
    this.getComentarios();
  }

  /**
   * Obtiene los comentarios ordenados de recientes a antiguos.
   */
  getComentarios () {
    this.dataService.getComentarios().subscribe(res => {
      this.puntuaciones = res;
      for (let i = 0; i < this.puntuaciones.length; i++) {
        if (this.puntuaciones[i].slug === this.serie.slug) {
          this.comentariosSerie.push(this.puntuaciones[i]);
        }
      }
      this.comentariosSerie.sort((a, b): any => {
        if (a['fecha'] < b['fecha']) return 1;
        if (a['fecha'] > b['fecha']) return -1;
        return 0;
      });
    });
  }

  /**
   * Función para comprobar si se está logueado o no.
   */
  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  /* Los datos para el slider. */
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  /**
   * Función que va introduciendo cada una de las categorías que contiene la serie y si existe, se agrega a la lista de categorías de la serie.
   * @param category - Categoría introducida en el momento del bucle.
   * @return el slug de la categoría requerida.
   */
  mismaCategoria(category) {
    for (let i = 0; i < this.categorias.length; i++) {
      if (category == this.categorias[i].name) return this.catSlug = this.categorias[i].slug;
    }
  }

  /**
   * Función la cual publica un comentario en la serie deseada.
   * @param slugSerie - Slug de la serie a la que se le va a publicar el comentario.
   */
  ejecutarFormulario(slugSerie) {
    this.comentariosSerie.push(this.usuario);

    /* Reordeno el listado de los comentarios */
    this.comentariosSerie.sort((a, b): any => {
      if (a['fecha'] < b['fecha']) return 1;
      if (a['fecha'] > b['fecha']) return -1;
      return 0;
    });

    this.usuario.slug = slugSerie; // Guardo el slug de la serie en el Array del comentario.

    /* Reinicio el array de comentarios y los vuelvo a cargar una vez guardados por si estas logueado y deseas eliminar un comentario en el mismo momento de publicarlo. */
    this.dataService.postComentario(this.usuario).subscribe(() => {
      this.comentariosSerie = []; // Reinicio el array.
      this.getComentarios(); // Recargo la lista de los comentarios.
    });

    /* Reinicio el formulario */
    this.usuario = {
      slug: null,
      email: null,
      puntuacion: null,
      comentario: null,
      fecha: Date.now()
    };
    
    this.visualizaciones(false, true, true); // Una vez enviado el comentario, muestro la página de la ficha de la película.
    this.mostrarToast('Has puntuado la serie correctamente.','verdecito'); // Presento el toast con un mensaje de éxito.
  }

  /**
   * Toast programable para diferentes mensajes.
   * @param message - Mensaje a mostrar en el toast.
   * @param color - Color a mostrar en el toast.
   */
  async mostrarToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 2000
    });
    toast.present();
  }

  /**
   * Transformo una fecha generada por Date.now() a formato convencional.
   * @param {string} fecha - Fecha en formato numérico obtenida para convertirla a formato convencional.
   * @return Fecha en formato convencional.
   */
  getFecha(fecha) {
    let date = new Date(fecha);
    return date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
  }

  /**
   * Seteo los valores de las diferentes visualizaciones según me conviene.
   * @param fichaSerie - Vista principal de la información de la serie.
   * @param formComentario - Vista del formulario para puntuar la serie.
   * @param comentarios - Vista de los comentarios ya publicados a la serie.
   */
  visualizaciones(fichaSerie, formComentario, comentarios) {
    this.cardSerie = fichaSerie;
    this.cardForm = formComentario;
    this.cardComentarios = comentarios;
  }

  /**
   * Función para calcular la puntuación total sobre una serie.
   * @return la puntuación total en caso de que haya sido previamente puntuada o devolverá un mensaje avisando de que no tiene puntuación.
   */
  puntuacionTotal() {
    if (this.comentariosSerie.length > 0) {
      let total = 0;
      for (let i = 0; i < this.comentariosSerie.length; i++) {
        total += this.comentariosSerie[i].puntuacion;
      }
      return total / this.comentariosSerie.length;
    }
    else return "Todavía no se ha puntuado";
  }

  /**
   * Función para eliminar un comentario de una serie y actualizar la lista de comentarios nuevamente.
   * @param {object} item Comentario a eliminar.
   */
  deleteComment(item) {
    this.dataService.deleteComment(item.id).subscribe(res => {
      this.comentariosSerie = []; // Reinicio el array
      this.getComentarios(); // Recargo la lista de los comentarios
      this.mostrarToast('Has eliminado el comentario correctamente.','warning');
    });
  }
}