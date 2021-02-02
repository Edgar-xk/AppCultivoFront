import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EspacioN } from 'src/app/Interfaces/Espacio';
import { SectorService } from '../Sector/sector.service';


@Injectable({
  providedIn: 'root'
})
export class EspacioService {

  constructor(private http: HttpClient, private sectorService: SectorService) { }


  public GuardarEspacio(info: EspacioN, id: String, index: number) {
    let response = this.http.post<String>("http://localhost:4000/NuevoEspacio", { data: info });

    response.subscribe(data => {
     
      if (data._id != null && data._id != void (0)) {
        this.sectorService.GetSectorByID(id).subscribe(data1 => {
          
          if (data1.Espacios.length != 0) {
            if (data1.Espacios.length < (index + 1)) {
              data1.Espacios.push({ _id: data._id, Nombre: data.Nombre });

            } else {
              data1.Espacios.splice(index, 1, { _id: data._id, Nombre: data.Nombre });

            }
          } else {
            console.log(index);
            
            for (let i = 0; i < data1.NumEspacios ; i++) {
              data1.Espacios.push({ id: null, Nombre: "Modificar" });
            }

            data1.Espacios.splice(index, 1, { _id: data._id, Nombre: data.Nombre });


            // window.location.href = "/";
          }
          console.log(data1);
          this.sectorService.UpdateSector(data1._id, data1).subscribe(data2 => {
            console.log(data2);
          });

        });
      }

    });





  }


}
