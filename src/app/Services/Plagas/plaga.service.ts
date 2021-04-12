import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Plaga } from 'src/app/Interfaces/plaga';
@Injectable({
  providedIn: 'root'
})
export class PlagaService {

  constructor(public http:HttpClient) { }

  public nuevaPlaga(data:Plaga){
    return this.http.post<any>("http://localhost:4000/NuevaPlaga",{data:data});
  }
}
