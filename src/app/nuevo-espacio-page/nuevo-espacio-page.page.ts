import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-nuevo-espacio-page',
  templateUrl: './nuevo-espacio-page.page.html',
  styleUrls: ['./nuevo-espacio-page.page.scss'],
})
export class NuevoEspacioPagePage implements OnInit {
  id;
  fecha_actual;

  abonos;
  fertilizantes;
  comentarios;


  constructor(private router: Router, private activateRoute: ActivatedRoute, public modalController: ModalController) {

  }

  ngOnInit() {
    this.comentarios = new Array();
    this.abonos = new Array();
    this.fertilizantes = new Array();
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get("id");
    })
    this.fecha_actual = new Date();


  }
  getFecha() {
    return this.fecha_actual;
  }

  agregarAbono() {
    let selectAbono = (<HTMLInputElement>document.getElementById("SelectAbono")).value;

    if (selectAbono != void (0))
      console.log(selectAbono);

    let cajaNuevoAbono = document.createElement("div");





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

}
