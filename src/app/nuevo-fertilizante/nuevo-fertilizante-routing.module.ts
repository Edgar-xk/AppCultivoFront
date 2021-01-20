import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoFertilizantePage } from './nuevo-fertilizante.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoFertilizantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoFertilizantePageRoutingModule {}
