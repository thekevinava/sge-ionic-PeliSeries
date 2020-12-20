export interface Componente {
    icon: string;
    name: string;
    redirectTo: string;
}

export interface Serie {
    title: string;
    year: string;
    sinopsis: string;
    seasons: string;
    episodes: string;
    categories: object;
    images: object;
    rating: string;
    slug: string;
}

export interface Category {
    slug: string;
    name: string;
    image: string;
}

export interface Comentarios {
    slug: string;
    email: string;
    puntuacion: string;
    comentario: string;
    fecha: string;
}