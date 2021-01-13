import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoEspacioPagePageRoutingModule } from './nuevo-espacio-page-routing.module';

import { NuevoEspacioPagePage } from './nuevo-espacio-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoEspacioPagePageRoutingModule
  ],
  declarations: [NuevoEspacioPagePage]
})
export class NuevoEspacioPagePageModule {}
