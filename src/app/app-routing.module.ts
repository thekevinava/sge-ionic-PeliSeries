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
    path: 'drama',
    loadChildren: () => import('./pages/drama/drama.module').then( m => m.DramaPageModule)
  },
  {
    path: 'action',
    loadChildren: () => import('./pages/action/action.module').then( m => m.ActionPageModule)
  },
  {
    path: 'horror',
    loadChildren: () => import('./pages/horror/horror.module').then( m => m.HorrorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
