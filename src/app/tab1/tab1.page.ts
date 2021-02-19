import { Component } from '@angular/core';
import { SectorService } from '../Services/Sector/sector.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  voidV;
  sectores;
  maseteros;
  constructor(private SectorService: SectorService) {

  }

  ngOnInit() {
    localStorage.clear();
    this.voidV=void(0);

    this.iniciarAPP();






  }


  verEspacio(id,tipo){
    localStorage.setItem("Tipo",tipo);
    localStorage.setItem("IdEspacio",id);
    window.location.href="/ver-espacio";
  }






  iniciarAPP(){
    this.sectores=new Array();
    this.maseteros=new Array();
    this.SectorService.GetSector().subscribe(data => {
      console.log("Data");
      console.log(data);
      data.map(sector => {

        //console.log(sector.Espacios.length);
        if (sector.Espacios.length < sector.NumEspacios) {
          for(let i=1;i<=sector.NumEspacios;i++){
            sector.Espacios.push({ _id1: null, Nombre: "Modificar" });
          }
         
        }
        if(sector.Tipo==1){
          this.sectores.push(sector);
        }else{
          this.maseteros.push(sector);
        }
        

      })



      
      


    });
  }
}
