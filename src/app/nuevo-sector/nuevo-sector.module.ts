import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoSectorPageRoutingModule } from './nuevo-sector-routing.module';

import { NuevoSectorPage } from './nuevo-sector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoSectorPageRoutingModule
  ],
  declarations: [NuevoSectorPage]
})
export class NuevoSectorPageModule {}
