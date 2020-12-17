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
}