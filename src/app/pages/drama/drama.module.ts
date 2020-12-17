import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DramaPageRoutingModule } from './drama-routing.module';

import { DramaPage } from './drama.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DramaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DramaPage]
})
export class DramaPageModule {}
