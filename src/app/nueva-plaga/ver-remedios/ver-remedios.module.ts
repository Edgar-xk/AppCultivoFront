import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerRemediosPageRoutingModule } from './ver-remedios-routing.module';

import { VerRemediosPage } from './ver-remedios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerRemediosPageRoutingModule
  ],
  declarations: [VerRemediosPage]
})
export class VerRemediosPageModule {}
