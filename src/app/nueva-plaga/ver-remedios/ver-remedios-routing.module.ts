import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerRemediosPage } from './ver-remedios.page';

const routes: Routes = [
  {
    path: '',
    component: VerRemediosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerRemediosPageRoutingModule {}
