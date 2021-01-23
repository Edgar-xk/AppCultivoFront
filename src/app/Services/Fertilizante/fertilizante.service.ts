import { Injectable } from '@angular/core';
import { FertilizanteN,Fertilizante } from 'src/app/Interfaces/Fertilizante';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FertilizanteService {

  constructor(private http:HttpClient) { }


  public NuevoFerttilizante(info:FertilizanteN){
    return this.http.post<any>("http://localhost:4000/NuevoFertlizante",{data:info});
  };

  public ObtenerFertilizante(){
    return this.http.get<Array<Fertilizante>>("http://localhost:4000/GetFertilizante");
  }
  public ObtenerFertilizanteByID(id:String){
    return this.http.get<Fertilizante>("http://localhost:4000/GetFertilizanteById/"+id);
  }



}
