export class Componente {
    icon: string;
    name: string;
    redirectTo: string;
}

export class Serie {
    title: string;
    id: number;
    year: string;
    sinopsis: string;
    seasons: string;
    episodes: string;
    categories: object;
    images: object;
    slug: string;
}

/**
 * Categoría.
 * @typedef {object} Comentarios
 * @property {number} [id] - El ID definido para dicho comentario.
 * @property {string} [slug] - La ruta de la serie puntuada.
 * @property {string} [email] - El email del usuario que puntua la serie.
 * @property {string} [puntuacion] - Puntuación obtenida a dicha serie por el usuario.
 * @property {string} [comentario] - Comentario opcional por dicho usuario.
 * @property {string} [fecha] - Fecha de la publicación de dicho comentario..
 */
export class Category {
    slug: string;
    id: number;
    name: string;
    image: string;
}

/**
 * Comeptarios.
 * @typedef {object} Comentarios
 * @property {number} [id] - El ID definido para dicho comentario.
 * @property {string} [slug] - La ruta de la serie puntuada.
 * @property {string} [email] - El email del usuario que puntua la serie.
 * @property {string} [puntuacion] - Puntuación obtenida a dicha serie por el usuario.
 * @property {string} [comentario] - Comentario opcional por dicho usuario.
 * @property {string} [fecha] - Fecha de la publicación de dicho comentario..
 */
export class Comentaries {
    id: number;
    slug: string;
    email: string;
    puntuacion: string;
    comentario: string;
    fecha: string;
}