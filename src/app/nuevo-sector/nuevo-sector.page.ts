import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';

@Component({
  selector: 'app-nuevo-sector',
  templateUrl: './nuevo-sector.page.html',
  styleUrls: ['./nuevo-sector.page.scss'],
})
export class NuevoSectorPage implements OnInit {

  constructor(private sectorService:SectorService) { }

  ngOnInit() {
  }



  saludar=()=>{
    console.log(document.getElementById("hola"));
    console.log(this.sectorService.getUser());
  }

}
