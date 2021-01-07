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
 * @param {number} id - ID de la categoría.
 * @param {string} slug - Ruta de la categoría.
 * @param {string} name - Nombre de la categoría.
 * @param {string} image - Icono a mostrar en la categoría.
 */
export interface Category {
    id: number;
    slug: string;
    name: string;
    image: string;
}

/**
 * Interfaz para las series.
 * @param {number} id - ID de la serie.
 * @param {string} slug - Ruta de la serie.
 * @param {string} title - Título de la serie.
 * @param {number} year - Año de estreno de la serie.
 * @param {string} sinopsis - Pequeña introducción sobre la serie.
 * @param {number} seasons - Número de temporadas que tiene la serie.
 * @param {number} episodes - Número de episodios totales que tiene la serie.
 * @param {object} categories - Array con las diferentes categorías de la serie.
 * @param {object} images - Array con las diferentes imagenes de la serie.
 */
export interface Serie {
    id: number;
    slug: string;
    title: string;
    year: number;
    sinopsis: string;
    seasons: number;
    episodes: number;
    categories: object;
    images: object;
}

/**
 * Interfaz para los comentarios.
 * @param {number} id - El ID definido para dicho comentario.
 * @param {string} slug - La ruta de la serie puntuada.
 * @param {string} email - El email del usuario que puntua la serie.
 * @param {number} puntuacion - Puntuación obtenida a dicha serie por el usuario.
 * @param {string} comentario - Comentario opcional por dicho usuario.
 * @param {string} fecha - Fecha de la publicación de dicho comentario.
 */
export interface Comentaries {
    id: number;
    slug: string;
    email: string;
    puntuacion: number;
    comentario: string;
    fecha: string;
}