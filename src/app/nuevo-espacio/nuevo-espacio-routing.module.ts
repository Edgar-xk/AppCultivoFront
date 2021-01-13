import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoEspacioPage } from './nuevo-espacio.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoEspacioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoEspacioPageRoutingModule {}
