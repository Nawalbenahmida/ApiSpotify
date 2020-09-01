import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: 'albums',loadChildren: () => import('./albums/albums.module').then( m => m.AlbumsPageModule)},
  {path: 'detail-albums', loadChildren: () => import('./detail-albums/detail-albums.module').then( m => m.DetailAlbumsPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
