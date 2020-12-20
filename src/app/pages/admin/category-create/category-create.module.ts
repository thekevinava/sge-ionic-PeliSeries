import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryCreatePageRoutingModule } from './category-create-routing.module';

import { CategoryCreatePage } from './category-create.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryCreatePageRoutingModule,
    ComponentsModule
  ],
  declarations: [CategoryCreatePage]
})
export class CategoryCreatePageModule {}
