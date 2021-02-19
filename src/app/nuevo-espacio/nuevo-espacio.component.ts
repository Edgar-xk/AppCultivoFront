import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nuevo-espacio',
  templateUrl: './nuevo-espacio.component.html',
  styleUrls: ['./nuevo-espacio.component.scss'],
})
export class NuevoEspacioComponent implements OnInit {
  @Input() sector;
  @Input()espacio;
  estilos:String;
  frase:String;
  constructor() { }

  ngOnInit() {
    console.log(this.sector.item.Tipo);
    //alert(this.sector.item.Tipo)
    
    if(this.sector.item.Tipo==1){
      this.frase="Modificar";
      this.estilos="BtnEspacio";
    }else{
      this.frase="Mdf";
      this.estilos="BtnEspacioMaseta";
    }
  }

  cambiar(){
    
   
    localStorage.setItem("info",JSON.stringify(this.sector));
    window.location.href="/nuevo-espacio-page/"+this.sector.item._id;
  }
}
