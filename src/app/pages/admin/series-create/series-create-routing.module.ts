import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesCreatePage } from './series-create.page';

const routes: Routes = [
  {
    path: '',
    component: SeriesCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesCreatePageRoutingModule {}
