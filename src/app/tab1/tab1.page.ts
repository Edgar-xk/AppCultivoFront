import { Component } from '@angular/core';
import { SectorService } from '../Services/Sector/sector.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sectores;
  constructor(private SectorService: SectorService) {

  }

  ngOnInit() {

    this.SectorService.GetSector().subscribe(data => {
      console.log("Data");
      console.log(data);
      data.map(sector => {
        console.log(sector.Espacios.length);
        if (sector.Espacios.length < sector.NumEspacios) {
          for(let i=1;i<=sector.NumEspacios;i++){
            sector.Espacios.push({ _id: null, Nombre: "Modificar" });
          }
         
        }

      })



      this.sectores = data;


    });








  }
}
