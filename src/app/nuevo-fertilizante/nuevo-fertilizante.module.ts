import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoFertilizantePageRoutingModule } from './nuevo-fertilizante-routing.module';

import { NuevoFertilizantePage } from './nuevo-fertilizante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoFertilizantePageRoutingModule
  ],
  declarations: [NuevoFertilizantePage]
})
export class NuevoFertilizantePageModule {}
