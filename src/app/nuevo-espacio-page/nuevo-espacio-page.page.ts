import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { Abono } from '../Interfaces/Abono';

import { ModalPage } from '../modal/modal.page';
import { AbonoService } from '../Services/Abono/abono.service';
import { SectorService } from '../Services/Sector/sector.service';
import { FertilizanteService } from '../Services/Fertilizante/fertilizante.service';
import { EspacioN } from '../Interfaces/Espacio';
import { Fertilizante } from '../Interfaces/Fertilizante';
import { EspacioService } from '../Services/Espacio/espacio.service';


@Component({
  selector: 'app-nuevo-espacio-page',
  templateUrl: './nuevo-espacio-page.page.html',
  styleUrls: ['./nuevo-espacio-page.page.scss'],
})
export class NuevoEspacioPagePage implements OnInit {
  idSector;
  indexEspacio;
  fecha_actual;

  abonosID;
  fertilizantesID;
  abonos;
  fertilizantes;
  comentarios;
  SectorName: String;
  Fertilizantes: Array<Fertilizante>;
  Abonos: Array<Abono>;

  constructor(private router: Router,
    private activateRoute: ActivatedRoute,
    public modalController: ModalController,
    private AbonoService: AbonoService,
    private SectorService: SectorService,
    private EspacioService:EspacioService,
    private FertilizanteService: FertilizanteService) {

  }

  ngOnInit() {
    this.comentarios = new Array();
    this.abonos = new Array();
    this.fertilizantes = new Array();
    this.abonosID = new Array<Abono>();


    


    this.activateRoute.paramMap.subscribe(paramMap => {
      this.idSector = paramMap.get("id");
    })
    this.indexEspacio=JSON.parse(localStorage.getItem("info")).index;

    this.fecha_actual = new Date();
    this.AbonoService.ObtenerAbonos().subscribe(data => {
      //console.log(data);


      console.log(typeof (data) == typeof (String));
      if (typeof (data) != typeof (String)) {


        this.abonosID = data;

      }




    });

    this.SectorService.GetSectorByID(this.idSector).subscribe(data => {
      if (typeof (data) != typeof (String)) {
        this.SectorName = data.Nombre;

        if(data.Tipo==2){
          document.getElementById("FechaCosechaC").classList.add("d-none");
        }
      }
    });


    this.FertilizanteService.ObtenerFertilizante().subscribe(data => {
      if (typeof (data) != typeof (String)) {


        this.fertilizantesID = data;

      }
    })



  }
  getFecha() {
    return this.fecha_actual;
  }

  agregarAbono() {
    let selectAbono = (<HTMLInputElement>document.getElementById("SelectAbono")).value;

    if (selectAbono != void (0)) {
      console.log(selectAbono);
      this.abonos.push({
        _id: selectAbono,
        fecha: this.getFecha()
      });

    }


    console.log(this.abonos);





  }
  async presentModal(title, op) {








    let data, data1;
    if (op == 1) {
      data = this.abonos;
    }
    if (op == 2) {
      data = this.fertilizantes;
    }
    if (op == 3) {
      data = this.comentarios;
    }

    this.Abonos = new Array<Abono>();
    this.Fertilizantes = new Array<Fertilizante>();

    if (op == 1) {



      data.map((item) => {
        this.AbonoService.ObtenerAbonosByID(item._id).subscribe((abono) => {
          this.Abonos.push(abono);
        });
      });
      data1 = this.Abonos;

    }
    if (op == 2) {


      data.map(item => {
        this.FertilizanteService.ObtenerFertilizanteByID(item._id).subscribe(fertilizante => {
          this.Fertilizantes.push(fertilizante);
        });

      });
      data1 = this.Fertilizantes;

    }
















    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'op': op,
        'data': data,
        'title': title,
        'data1': data1
      }
    });


    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log(dataReturned.data.data);
        if (!dataReturned.data.cerrar) {
          this.presentModal(dataReturned.data.title, dataReturned.data.op)
        }
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  agregarFertilizante() {
    let SelectFertilizante = (<HTMLInputElement>document.getElementById("SelectFertilizante")).value;

    if (SelectFertilizante != void (0)) {
      console.log(SelectFertilizante);
      this.fertilizantes.push({
        _id: SelectFertilizante,
        fecha: this.getFecha()
      });

    }
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
  private Guardar() {
    let fecha_Cultivo = (<HTMLInputElement>document.getElementById("FechaCultivo")).value;
    let fecha_cosecha = (<HTMLInputElement>document.getElementById("FechaCosecha")).value;

    

    let info: EspacioN = {
      Nombre: (<HTMLInputElement>document.getElementById("NombreCultivo")).value,
      FechaCultivo: new Date(fecha_Cultivo),
      FechaCosecha: new Date(fecha_cosecha),
      Abonos: this.abonos,
      Fertilizante: this.fertilizantes,
      Tipo: parseInt((<HTMLInputElement>document.getElementById("SelectTipo")).value, 10),
      Cuidados: (<HTMLInputElement>document.getElementById("CuidadosTxt")).value,
      Comentarios: this.comentarios

    }

    this.EspacioService.GuardarEspacio(info,this.idSector,this.indexEspacio);



  }

}
