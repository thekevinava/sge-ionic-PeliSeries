import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeriesListPageRoutingModule } from './series-list-routing.module';

import { SeriesListPage } from './series-list.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeriesListPageRoutingModule,
    ComponentsModule
    
  ],
  declarations: [SeriesListPage]
})
export class SeriesListPageModule {}
