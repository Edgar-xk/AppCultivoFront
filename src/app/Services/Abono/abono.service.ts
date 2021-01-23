import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Abono,AbonoN } from 'src/app/Interfaces/Abono';
@Injectable({
  providedIn: 'root'
})
export class AbonoService {

  constructor(private http:HttpClient) { }


  public NuevoAbono(info:AbonoN){
    return this.http.post<any>("http://localhost:4000/NuevoAbono",{data:info});
  };

  public ObtenerAbonos(){
    return this.http.get<Array<Abono>>("http://localhost:4000/GetAbonos");
  }
  public ObtenerAbonosByID(id:String){
    console.log("Traer abono ID:"+id);
    return this.http.get<Abono>("http://localhost:4000/GetAbonosByID/"+id);
  }


}
