export interface Sector {
    Nombre:String,
      Tipo:Number
      NumEspacios:Number
      Espacios:[]
}

export interface SectorL {
  Nombre:String,
    Tipo:Number
    NumEspacios:Number
    Espacios:[{
      _id,
      Nombre
    }]
}