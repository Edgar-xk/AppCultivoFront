import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoEspacioPagePage } from './nuevo-espacio-page.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoEspacioPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoEspacioPagePageRoutingModule {}
