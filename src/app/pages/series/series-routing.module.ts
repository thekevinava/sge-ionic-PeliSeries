import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriePage } from '../serie/serie.page';

import { SeriesPage } from './series.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        // redirectTo: '/home' // si entras en url/series, te redirecciona a url/home
        component: SeriesPage
      },
      {
        path: ':serieSlug',
        component: SeriePage,
        loadChildren: () => import('../serie/serie.module').then(m => m.SeriePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesPageRoutingModule {}
