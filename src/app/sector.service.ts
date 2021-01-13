import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SectorService {

  constructor(private http:HttpClient) { }
  getUser(){
    return  "Hola";
  }
}




