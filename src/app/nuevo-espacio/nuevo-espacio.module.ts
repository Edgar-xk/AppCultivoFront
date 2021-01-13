import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoEspacioComponent } from './nuevo-espacio.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [NuevoEspacioComponent],
  exports: [NuevoEspacioComponent]
})
export class NuevoEspacioComponentModule {}
