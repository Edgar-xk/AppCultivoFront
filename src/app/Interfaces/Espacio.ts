export interface EspacioN{
    Nombre:String,
    FechaCultivo:Date,
    FechaCosecha:Date,
    Abonos:[],
    Fertilizante:[],
    Tipo:Number,
    Cuidados:String,
    Comentarios:[]
}

export interface Espacio{
    _id;
    Nombre:String,
    FechaCultivo:Date,
    FechaCosecha:Date,
    Abonos:[],
    Fertilizante:[],
    Tipo:Number,
    Cuidados:String,
    Comentarios:[]
}