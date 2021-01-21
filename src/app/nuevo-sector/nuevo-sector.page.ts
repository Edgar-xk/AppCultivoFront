import { Component, OnInit } from '@angular/core';
import { SectorService } from '../Services/Sector/sector.service';
import {Sector} from '../Interfaces/sector';



@Component({
  selector: 'app-nuevo-sector',
  templateUrl: './nuevo-sector.page.html',
  styleUrls: ['./nuevo-sector.page.scss'],
})
export class NuevoSectorPage implements OnInit {

  constructor(private sectorService:SectorService) { }

  ngOnInit() {
  }


  public  Guardar(){


    let tipo:string=(<HTMLInputElement>document.getElementById("SelectTipo")).value;

    let info:Sector={
      Nombre:(<HTMLInputElement>document.getElementById("NombreSecctor")).value,
      Tipo:parseInt(tipo,10),
      NumEspacios:parseInt((<HTMLInputElement>document.getElementById("NumEspacios")).value,10),
      Espacios:[]
    }
     this.sectorService.NuevoSector(info).subscribe(data=>{
       console.log(data);
       if(data!="Error"){
         window.location.href="/"
       }
     });
  }

  saludar=()=>{
    console.log(document.getElementById("hola"));
    
  }

}
