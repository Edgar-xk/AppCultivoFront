import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalAbonoFertilizantePage } from '../modal-abono-fertilizante/modal-abono-fertilizante.page';


@Component({
  selector: 'app-nuevo-fertilizante',
  templateUrl: './nuevo-fertilizante.page.html',
  styleUrls: ['./nuevo-fertilizante.page.scss'],
})
export class NuevoFertilizantePage implements OnInit {

  utilidades:Array<String>;
  nutrimentos:Array<String>;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.utilidades=new Array<String>();
    this.nutrimentos=new Array<String>();
  }

  agregarNutrimento(){
    let nutrimento:String=(<HTMLInputElement>document.getElementById("NutrimentosTxt")).value;
    console.log(nutrimento);
    this.utilidades.push(nutrimento);
    document.getElementById("NutrimentosTxt").setAttribute("value","");
  }
  agregarUtilidad(){
    
    let utilidad:String=(<HTMLInputElement>document.getElementById("UtilidadesTxt")).value;
    console.log(utilidad);
    this.nutrimentos.push(utilidad);
    document.getElementById("UtilidadesTxt").setAttribute("value","");


  }


  
  async presentModal(title, op) {
    let data;
    if (op == 1) {
      data = this.utilidades;
    }
    if (op == 2) {
      data = this.nutrimentos;
    }
   



    const modal = await this.modalController.create({
      component: ModalAbonoFertilizantePage,
      cssClass: 'my-custom-class',
      componentProps: {
        'op': op,
        'data': data,
        'title': title
      }
    });


    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log(dataReturned.data.data);
        if (!dataReturned.data.cerrar) {
          this.presentModal(dataReturned.data.title,dataReturned.data.op)
        }
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }
}
