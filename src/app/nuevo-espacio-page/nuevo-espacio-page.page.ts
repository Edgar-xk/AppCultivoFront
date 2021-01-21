import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { runInThisContext } from 'vm';
import { Abono } from '../Interfaces/Abono';

import { ModalPage } from '../modal/modal.page';
import { AbonoService } from '../Services/Abono/abono.service';
import { SectorService } from '../Services/Sector/sector.service';


@Component({
  selector: 'app-nuevo-espacio-page',
  templateUrl: './nuevo-espacio-page.page.html',
  styleUrls: ['./nuevo-espacio-page.page.scss'],
})
export class NuevoEspacioPagePage implements OnInit {
  id;
  fecha_actual;

  abonosID;

  abonos;
  fertilizantes;
  comentarios;
  SectorName:String;

  constructor(private router: Router, private activateRoute: ActivatedRoute, public modalController: ModalController,private AbonoService:AbonoService,private SectorService:SectorService) {

  }

  ngOnInit() {
    this.comentarios = new Array();
    this.abonos = new Array();
    this.fertilizantes = new Array();
    this.abonosID=new Array<Abono>();
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get("id");
    })
    this.fecha_actual = new Date();
    this.AbonoService.ObtenerAbonos().subscribe(data=>{
      console.log(data);

      if(data!="Error"){
          this.abonosID=data;
      }



    });

    this.SectorService.GetSectorByID(this.id).subscribe(data=>{
      if(data!="Error"){
        this.SectorName=data.Nombre;
      }
    });


    
    
  }
  getFecha() {
    return this.fecha_actual;
  }

  agregarAbono() {
    let selectAbono = (<HTMLInputElement>document.getElementById("SelectAbono")).value;

    if (selectAbono != void (0)){
      console.log(selectAbono);
      this.abonos.push(selectAbono);

    }


    console.log(this.abonos);





  }
  async presentModal(title, op) {
    let data;
    if (op == 1) {
      data = this.abonos;
    }
    if (op == 2) {
      data = this.fertilizantes;
    }
    if (op == 3) {
      data = this.comentarios;
    }



    const modal = await this.modalController.create({
      component: ModalPage,
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

  agregarComentario() {
    let comentario: String = (<HTMLInputElement>document.getElementById("ComentariosTxt")).value;
    let fecha: Date = new Date();

    this.comentarios.push({
      comentario: comentario,
      fecha: fecha
    });
    document.getElementById("ComentariosTxt").setAttribute("value", "");
    console.log(this.comentarios);

  }
  private Guardar(){
    
  }

}
