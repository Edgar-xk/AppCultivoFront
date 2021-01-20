import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAbonoFertilizantePage } from './modal-abono-fertilizante.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAbonoFertilizantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAbonoFertilizantePageRoutingModule {}
