import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerEspacioPage } from './ver-espacio.page';

const routes: Routes = [
  {
    path: '',
    component: VerEspacioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerEspacioPageRoutingModule {}
