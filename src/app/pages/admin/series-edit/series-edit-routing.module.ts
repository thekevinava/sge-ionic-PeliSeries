import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesEditPage } from './series-edit.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SeriesEditPage
      },
      {
        path: ':serieID',
        component: SeriesEditPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesEditPageRoutingModule {}
