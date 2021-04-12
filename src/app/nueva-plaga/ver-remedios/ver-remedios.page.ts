import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Plaga } from 'src/app/Interfaces/plaga';

@Component({
  selector: 'app-ver-remedios',
  templateUrl: './ver-remedios.page.html',
  styleUrls: ['./ver-remedios.page.scss'],
})
export class VerRemediosPage implements OnInit {

  @Input() data:Plaga[];
  constructor(public modalController:ModalController) { }

  ngOnInit() {
    console.log(this.data);
  }

  dismissModal() {
    
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true,
      'data': this.data,
     
    });
  }

  eliminar(item:Plaga,ev){
    console.log(item);
    let index;
    for(let itemV=0;itemV<this.data.length;itemV++){
      if(this.data[itemV].nombre==item.nombre){
        index=itemV;
        break;
      }
      
    }
    this.data.splice(index,1);
    this.modalController.dismiss({
      'dismissed': false,
      'data': this.data,
     
    });
  }
}
