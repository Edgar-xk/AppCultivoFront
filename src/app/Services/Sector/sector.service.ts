import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sector,SectorL} from '../../Interfaces/sector';
@Injectable({
  providedIn: 'root'
})
export class SectorService {

  constructor(private http:HttpClient) { }


  public  NuevoSector(info:Sector){
    
    return this.http.post<any>("http://localhost:4000/NuevoSector",{data:info});
  };
  
  public GetSector(){
    return this.http.get<Array<SectorL>>("http://localhost:4000/GetSectores");
  }
  public GetSectorByID(id:String){
    return this.http.get<SectorL>("http://localhost:4000/GetSectorById/"+id);
  }
  public UpdateSector(id:String,info:SectorL){
      return this.http.put<String>("http://localhost:4000/UpdateSector",{data:info})

  }

}




