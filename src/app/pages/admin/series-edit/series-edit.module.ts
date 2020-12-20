import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeriesEditPageRoutingModule } from './series-edit-routing.module';

import { SeriesEditPage } from './series-edit.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeriesEditPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SeriesEditPage]
})
export class SeriesEditPageModule {}
