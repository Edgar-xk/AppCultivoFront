import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAbonoFertilizantePageRoutingModule } from './modal-abono-fertilizante-routing.module';

import { ModalAbonoFertilizantePage } from './modal-abono-fertilizante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAbonoFertilizantePageRoutingModule
  ],
  declarations: [ModalAbonoFertilizantePage]
})
export class ModalAbonoFertilizantePageModule {}
