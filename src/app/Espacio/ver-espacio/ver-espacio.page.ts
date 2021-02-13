import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Abono } from 'src/app/Interfaces/Abono';
import { EspacioN } from 'src/app/Interfaces/Espacio';
import { Fertilizante } from 'src/app/Interfaces/Fertilizante';
import { AbonoService } from 'src/app/Services/Abono/abono.service';
import { EspacioService } from 'src/app/Services/Espacio/espacio.service';
import { FertilizanteService } from 'src/app/Services/Fertilizante/fertilizante.service';
import {ModalInfoPage} from '../modal-info/modal-info.page';


@Component({
  selector: 'app-ver-espacio',
  templateUrl: './ver-espacio.page.html',
  styleUrls: ['./ver-espacio.page.scss'],
})
export class VerEspacioPage implements OnInit {

  nombre: String;
  sector: String;
  fecha_cultivo: Date;
  fecha_cosecha: Date;
  tipo: Number;
  cuidados: String;
  fertilizantes;
  abonos;
  comentarios;
  constructor(private espacioService: EspacioService,
    public modalController: ModalController,
    private abonosService:AbonoService,
    private fertilizanteService:FertilizanteService
    ) {



  }

  ngOnInit() {
    let result = this.espacioService.GetEspacioById(localStorage.getItem("IdEspacio"));
    result.subscribe(data => {
      if (data._id != null && data._id != void (0)) {
        this.nombre = data.Nombre;
        this.cuidados = data.Cuidados;
        this.fecha_cultivo = data.FechaCultivo;
        this.fecha_cosecha = data.FechaCosecha;
        this.tipo = data.Tipo;
        this.comentarios = data.Comentarios;
        this.fertilizantes = data.Fertilizante;
        this.abonos = data.Abonos;
      }

    });

    




  }
  async presentModal(title, tipo) {
    let data;
    let res;
    switch (tipo) {
      case 1:
       
        data = new Array<Abono>();
        await this.abonos.map(async(abono)=>{
          res=this.abonosService.ObtenerAbonosByID(abono._id);
         await res.subscribe(async(data1)=>{
            await data.push({
              info:data1,
              fecha:abono.fecha
            });
          });
        });
        

        console.log(data);


        break;
      case 2:
        data = new Array<Fertilizante>();
        await this.fertilizantes.map(async(fertilizante)=>{
          res=this.fertilizanteService.ObtenerFertilizanteByID(fertilizante._id);
         await res.subscribe(async(data1)=>{
            await data.push({
              info:data1,
              fecha:fertilizante.fecha
            });
          });
        });
        

        console.log(data);
        break;
      case 3:
        data=this.comentarios;
        console.log(this.comentarios);
        break;
      default:
        break;
    }
    
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'op': tipo,
        'data': data,
        'title': title,
        
      }
    });


    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log(dataReturned.data.data);
       /* if (!dataReturned.data.cerrar) {
          this.presentModal(dataReturned.data.title, dataReturned.data.op)
        }*/
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

}
