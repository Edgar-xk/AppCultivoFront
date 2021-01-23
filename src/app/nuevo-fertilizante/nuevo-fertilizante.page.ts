import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FertilizanteN } from '../Interfaces/Fertilizante';

import { ModalAbonoFertilizantePage } from '../modal-abono-fertilizante/modal-abono-fertilizante.page';
import { FertilizanteService } from '../Services/Fertilizante/fertilizante.service';


@Component({
  selector: 'app-nuevo-fertilizante',
  templateUrl: './nuevo-fertilizante.page.html',
  styleUrls: ['./nuevo-fertilizante.page.scss'],
})
export class NuevoFertilizantePage implements OnInit {

  utilidades:Array<String>;
  nutrimentos:Array<String>;
  constructor(public modalController: ModalController,private FertilizanteService:FertilizanteService) { }

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


  private Guardar(){
    let info:FertilizanteN={
      Nombre:(<HTMLInputElement>document.getElementById("NombreFertilizante")).value,
      Tipo:parseInt((<HTMLInputElement>document.getElementById("SelectTipo")).value,10),
      Utilidades:this.utilidades,
      Nutrimentos:this.nutrimentos,
      Periodicidad:{
        numero:parseInt((<HTMLInputElement>document.getElementById("NumberPeriodicidad")).value,10),
        tipo:parseInt((<HTMLInputElement>document.getElementById("SelectTipoP")).value,10)
      },
      Color:(<HTMLInputElement>document.getElementById("ColorFertilizante")).value,
      Precausiones:(<HTMLInputElement>document.getElementById("PrecaucionesTxt")).value
      
    }
    this.FertilizanteService.NuevoFerttilizante(info).subscribe(data=>{
      if(data!="Error"){
        this.BorrarCampos();
      }
    })

  }

  private BorrarCampos(){
    (<HTMLInputElement>document.getElementById("NombreFertilizante")).value="";
    this.utilidades=new Array<String>();
    this.nutrimentos=new Array<String>();
    (<HTMLInputElement>document.getElementById("NumberPeriodicidad")).value="";
    (<HTMLInputElement>document.getElementById("PrecaucionesTxt")).value="";
  }
}
