import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryEditPageRoutingModule } from './category-edit-routing.module';

import { CategoryEditPage } from './category-edit.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryEditPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CategoryEditPage]
})
export class CategoryEditPageModule {}
