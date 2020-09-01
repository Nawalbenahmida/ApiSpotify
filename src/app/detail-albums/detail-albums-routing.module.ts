import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAlbumsPage } from './detail-albums.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAlbumsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAlbumsPageRoutingModule {}
