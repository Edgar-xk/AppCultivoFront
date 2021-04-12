import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaPlagaPage } from './nueva-plaga.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaPlagaPage
  },
  {
    path: 'ver-remedios',
    loadChildren: () => import('./ver-remedios/ver-remedios.module').then( m => m.VerRemediosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaPlagaPageRoutingModule {}
