import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';
import { Plaga } from '../Interfaces/plaga';
import { Remedios } from '../Interfaces/remedios';
import {VerRemediosPage} from './ver-remedios/ver-remedios.page';
@Component({
  selector: 'app-nueva-plaga',
  templateUrl: './nueva-plaga.page.html',
  styleUrls: ['./nueva-plaga.page.scss'],
})
export class NuevaPlagaPage implements OnInit {

  remedios:Array<Remedios>;
  constructor(public modalController:ModalController) {
    this.remedios=new Array<Remedios>();
   }

  ngOnInit() {
  }

  agregarRemedio(){
    let nombreRemedio=(<HTMLInputElement>document.getElementById("RemediosTxt")).value;
    let tipo:String=parseInt((<HTMLInputElement>document.getElementById("SelectTipo")).value)==1?"Dias":"Meses";
    let periodicidad:String="Cada "+(<HTMLInputElement>document.getElementById("PeriodicidadTxt")).value+" "+tipo;
    let remedio:Remedios={
      Nombre:nombreRemedio,
      Periodicidad:periodicidad
    };
    this.remedios.push(remedio);

    (<HTMLInputElement>document.getElementById("RemediosTxt")).value="";
    (<HTMLInputElement>document.getElementById("SelectTipo")).value="";
    (<HTMLInputElement>document.getElementById("PeriodicidadTxt")).value="";
  }

  async verRemedios(){
    const modal = await this.modalController.create({
      component: VerRemediosPage,
      cssClass: 'my-custom-class',
      componentProps: {
        data:this.remedios
      }
    });
    modal.onDidDismiss().then(async(dataReturned) => {
      if(dataReturned!=null){
        this.remedios=dataReturned.data.data
        if(!dataReturned.data.dismissed){
          this.verRemedios();
        }
      }
    });

    return await modal.present();
  }


  Guardar(){
    let nombrePlaga=(<HTMLInputElement>document.getElementById("NombrePlaga")).value;
    let Descripcion=(<HTMLInputElement>document.getElementById("DescripcionTxt")).value;
    let plaga:Plaga={
      nombre:nombrePlaga,
      descripcion:Descripcion,
      Remedios:this.remedios
    }
  }
}
