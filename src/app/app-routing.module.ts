import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'nuevo-sector',
    loadChildren: () => import('./nuevo-sector/nuevo-sector.module').then( m => m.NuevoSectorPageModule)
  },
  {
    path: 'nuevo-espacio',
    loadChildren: () => import('./nuevo-espacio/nuevo-espacio.module').then( m => m.NuevoEspacioPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
