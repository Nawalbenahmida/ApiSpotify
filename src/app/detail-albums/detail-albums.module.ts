import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAlbumsPageRoutingModule } from './detail-albums-routing.module';

import { DetailAlbumsPage } from './detail-albums.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAlbumsPageRoutingModule
  ],
  declarations: [DetailAlbumsPage]
})
export class DetailAlbumsPageModule {}
