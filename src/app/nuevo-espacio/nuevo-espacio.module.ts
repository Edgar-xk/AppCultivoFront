import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoEspacioPageRoutingModule } from './nuevo-espacio-routing.module';

import { NuevoEspacioPage } from './nuevo-espacio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoEspacioPageRoutingModule
  ],
  declarations: [NuevoEspacioPage]
})
export class NuevoEspacioPageModule {}
