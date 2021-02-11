/**
 * Interfaz para los menus.
 * @param {string} icon - El icono para la categoría obtenido de https://ionicons.com.
 * @param {string} name - Nombre de la categoría.
 * @param {string} redirectTo - Ruta a la que redirecciona al pulsar.
 */
export interface MenuOpts {
    icon: string;
    name: string;
    redirectTo: string;
}

/**
 * Interfaz para las categorías.
 * @param {string} slug - Ruta de la categoría.
 * @param {string} name - Nombre de la categoría.
 * @param {string} image - Icono a mostrar en la categoría.
 */
export interface Category {
    slug: string;
    name: string;
    image: string;
}

/**
 * Interfaz para las series.
 * @param {string} slug - Ruta de la serie.
 * @param {string} title - Título de la serie.
 * @param {number} year - Año de estreno de la serie.
 * @param {string} sinopsis - Pequeña introducción sobre la serie.
 * @param {number} seasons - Número de temporadas que tiene la serie.
 * @param {number} episodes - Número de episodios totales que tiene la serie.
 * @param {object} categories - Array con las diferentes categorías de la serie.
 * @param {object} images - Array con las diferentes imagenes de la serie.
 * @param {object} comments - Array con los ObjectId de los comentarios
 */
export interface Serie {
    slug: string;
    title: string;
    year: number;
    sinopsis: string;
    seasons: number;
    episodes: number;
    categories: object;
    images: object;
    comments: object;
}

/**
 * Interfaz para los comentarios.
 * @param {string} email - El email del usuario que puntua la serie.
 * @param {number} rating - Puntuación obtenida a dicha serie por el usuario.
 * @param {string} message - Comentario opcional por dicho usuario.
 * @param {any} serie - ObjectId de la serie en la que se publica el comentario.
 * @param {Date} date - Fecha de la publicación de dicho comentario.
 */
export interface Comentaries {
    email: string;
    rating: number;
    message: string;
    serie: any;
    date: Date;
}