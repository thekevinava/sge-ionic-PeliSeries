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

export class Category {
    slug: string;
    id: number;
    name: string;
    image: string;
}

export class Comentarios {
    slug: string;
    id: number;
    email: string;
    puntuacion: string;
    comentario: string;
    fecha: string;
}