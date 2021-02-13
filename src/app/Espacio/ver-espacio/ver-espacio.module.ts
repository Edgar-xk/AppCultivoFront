import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerEspacioPageRoutingModule } from './ver-espacio-routing.module';

import { VerEspacioPage } from './ver-espacio.page';
import {ModalInfoPageModule} from '../modal-info/modal-info.module';
import {ModalInfoPage} from '../modal-info/modal-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerEspacioPageRoutingModule,
    ModalInfoPageModule
    
  ],
  declarations: [VerEspacioPage],
  exports:[
    VerEspacioPage
  ]
})
export class VerEspacioPageModule {}
