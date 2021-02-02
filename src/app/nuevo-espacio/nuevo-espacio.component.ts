import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nuevo-espacio',
  templateUrl: './nuevo-espacio.component.html',
  styleUrls: ['./nuevo-espacio.component.scss'],
})
export class NuevoEspacioComponent implements OnInit {
  @Input() sector;
  @Input()espacio;
  constructor() { }

  ngOnInit() {}

  cambiar(){
    console.log(this.sector);
    localStorage.setItem("info",JSON.stringify(this.sector));
    window.location.href="/nuevo-espacio-page/"+this.sector.item._id;
  }
}
