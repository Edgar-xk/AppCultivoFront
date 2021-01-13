import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoSectorPage } from './nuevo-sector.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoSectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoSectorPageRoutingModule {}
