import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerEspacioPageRoutingModule } from './ver-espacio-routing.module';

import { VerEspacioPage } from './ver-espacio.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerEspacioPageRoutingModule,
    
    
  ],
  declarations: [VerEspacioPage],
  exports:[
    VerEspacioPage
  ]
})
export class VerEspacioPageModule {}
