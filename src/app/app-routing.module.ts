import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'series',
    loadChildren: () => import('./pages/series/series.module').then( m => m.SeriesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin/home',
    loadChildren: () => import('./pages/admin/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'admin/series-list',
    loadChildren: () => import('./pages/admin/series-list/series-list.module').then( m => m.SeriesListPageModule)
  },
  {
    path: 'admin/series-create',
    loadChildren: () => import('./pages/admin/series-create/series-create.module').then( m => m.SeriesCreatePageModule)
  },
  {
    path: 'category-create',
    loadChildren: () => import('./pages/admin/category-create/category-create.module').then( m => m.CategoryCreatePageModule)
  },
  {
    path: 'category-list',
    loadChildren: () => import('./pages/admin/category-list/category-list.module').then( m => m.CategoryListPageModule)
  },
  {
    path: 'category-edit',
    loadChildren: () => import('./pages/admin/category-edit/category-edit.module').then( m => m.CategoryEditPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
