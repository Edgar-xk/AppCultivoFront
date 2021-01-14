import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoAbonoPageRoutingModule } from './nuevo-abono-routing.module';

import { NuevoAbonoPage } from './nuevo-abono.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoAbonoPageRoutingModule
  ],
  declarations: [NuevoAbonoPage]
})
export class NuevoAbonoPageModule {}
