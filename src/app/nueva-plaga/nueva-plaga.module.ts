import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaPlagaPageRoutingModule } from './nueva-plaga-routing.module';

import { NuevaPlagaPage } from './nueva-plaga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaPlagaPageRoutingModule
  ],
  declarations: [NuevaPlagaPage]
})
export class NuevaPlagaPageModule {}
