import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
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
      'op':this.op
    });
  }


  eliminarComentario(comentario){
    let index=this.data.indexOf(comentario);
    this.data.splice(index,1);
    console.log(this.data);
  }
}
