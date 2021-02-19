import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.page.html',
  styleUrls: ['./info-window.page.scss'],
})
export class InfoWindowPage implements OnInit {
  @Input() data: Array<any>;
  @Input() op: number;
  @Input() title: String;

  constructor(private modalcontroller1:ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalcontroller1.dismiss({
      'dismissed': true,
      'data': this.data,
      'op': this.op,
      'cerrar': true
    });
  }
}
