import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sectores;
  constructor() {
    
  }

  ngOnInit(){
    this.sectores=[{
      id : 1,
      Nombre:"SectoraA",
      Tipo: 1,
      NumEspacios:2,
      Espacios:[
        {
          _id:"3",
          Nombre:"Frijol"
        }
      ]
    },
    {
      id : 1,
      Nombre:"SectoraA",
      Tipo: 1,
      NumEspacios:2,
      Espacios:[
        {
          _id:"3",
          Nombre:"Frijol"
        },
        {
          _id:"3",
          Nombre:"Arroz"
        }
      ]
    }
    ,
    
  ];
    for(let sector of this.sectores){
      console.log(sector.Espacios.length);
      if(sector.Espacios.length<sector.NumEspacios){
        sector.Espacios.push({_id:null,Nombre:"Modificar"});
      }
    }
    console.log(this.sectores);

   

  }
}
