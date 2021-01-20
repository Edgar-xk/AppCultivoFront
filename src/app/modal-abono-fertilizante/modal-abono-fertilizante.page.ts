import { Component,Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal-abono-fertilizante',
  templateUrl: './modal-abono-fertilizante.page.html',
  styleUrls: ['./modal-abono-fertilizante.page.scss'],
})
export class ModalAbonoFertilizantePage implements OnInit {
  @Input() data:Array<any>;
  @Input() op:number;
  @Input() title:String;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true,
      'data':this.data,
      'op':this.op,
      'cerrar':true
    });
  }
  eliminarComentario(comentario,ev){
    
    
    let index=this.data.indexOf(comentario);
    this.data.splice(index,1);

    console.log(this.data);
    this.modalController.dismiss({
      'dismissed': true,
      'data':this.data,
      'op':this.op,
      'title':this.title,
      'cerrar':false
    });
  }





  
}
