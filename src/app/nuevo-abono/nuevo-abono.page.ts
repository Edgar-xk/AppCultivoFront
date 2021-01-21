import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Abono } from '../Interfaces/Abono';
import  { AbonoService } from '../Services/Abono/abono.service';

import { ModalAbonoFertilizantePage } from '../modal-abono-fertilizante/modal-abono-fertilizante.page';

@Component({
  selector: 'app-nuevo-abono',
  templateUrl: './nuevo-abono.page.html',
  styleUrls: ['./nuevo-abono.page.scss'],
})
export class NuevoAbonoPage implements OnInit {

  utilidades:Array<String>;
  nutrimentos:Array<String>;
  constructor(public modalController: ModalController,private AbonoService:AbonoService) { }

  ngOnInit() {
    this.utilidades=new Array<String>();
    this.nutrimentos=new Array<String>();
  }
  agregarUtilidad(){
    
    let utilidad:String=(<HTMLInputElement>document.getElementById("UtilidadesTxt")).value;
   // console.log(utilidad);
    this.utilidades.push(utilidad);
    document.getElementById("UtilidadesTxt").setAttribute("value","");


  }

  agregarNutrimento(){
    let nutrimento:String=(<HTMLInputElement>document.getElementById("NutrimentosTxt")).value;
    //console.log(nutrimento);
    this.nutrimentos.push(nutrimento);
    document.getElementById("NutrimentosTxt").setAttribute("value","");
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


  private Guardar(){
    let info:Abono={
      Nombre:(<HTMLInputElement>document.getElementById("NombreAbono")).value,
      Tipo:parseInt((<HTMLInputElement>document.getElementById("SelectTipo")).value,10),
      Utilidades:this.utilidades,
      Nutrimentos:this.nutrimentos,
      Periodicidad:{
        num:parseInt((<HTMLInputElement>document.getElementById("PeriodicidadTxt")).value,10),
        tipo:parseInt((<HTMLInputElement>document.getElementById("SelectTipo")).value,10)
      },
      Color:(<HTMLInputElement>document.getElementById("ColorAbono")).value
    };

    this.AbonoService.NuevoAbono(info).subscribe(data=>{
      console.log(data);
      this.BorrarCampos();

    }) 

  }

  public BorrarCampos(){
    (<HTMLInputElement>document.getElementById("NombreAbono")).value="";
    (<HTMLInputElement>document.getElementById("SelectTipo")).value=null;
    (<HTMLInputElement>document.getElementById("PeriodicidadTxt")).value="";
    (<HTMLInputElement>document.getElementById("SelectTipo")).value=null;



  }

}
