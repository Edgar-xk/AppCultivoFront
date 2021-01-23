import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { Abono } from '../Interfaces/Abono';
import { Fertilizante } from '../Interfaces/Fertilizante';
import { AbonoService } from '../Services/Abono/abono.service';
import { FertilizanteService } from '../Services/Fertilizante/fertilizante.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() data: Array<any>;
  @Input() op: number;
  @Input() title: String;
  @Input() data1:Array<any>;


 


  constructor(
    public modalController: ModalController,
    private AbonoService: AbonoService,
    private FertilizanteService: FertilizanteService) { }

   ngOnInit() {
    

     

    


  }










  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true,
      'data': this.data,
      'op': this.op,
      'cerrar': true
    });
  }


  eliminarItem(id) {

    let index;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]._id == id) {
        index = i;
      }
    }

    if (index != void (0)) {
      this.data.splice(index, 1);
    }
    this.modalController.dismiss({
      'dismissed': true,
      'data': this.data,
      'op': this.op,
      'title': this.title,
      'cerrar': false
    });



  }
  eliminarComentario(comentario, ev) {


    let index = this.data.indexOf(comentario);
    this.data.splice(index, 1);

    //console.log(this.data);
    this.modalController.dismiss({
      'dismissed': true,
      'data': this.data,
      'op': this.op,
      'title': this.title,
      'cerrar': false
    });
  }
}
