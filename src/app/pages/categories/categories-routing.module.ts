import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryPage } from '../category/category.page';

import { CategoriesPage } from './categories.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CategoriesPage
      },
      {
        path: ':categorySlug',
        component: CategoryPage,
        loadChildren: () => import('../category/category.module').then(m => m.CategoryPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {}
