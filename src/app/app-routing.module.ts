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
    path: 'nuevo-espacio-page',
    children:[
      {
        path:"",
        loadChildren: () => import('./nuevo-espacio-page/nuevo-espacio-page.module').then( m => m.NuevoEspacioPagePageModule)
      },
      {
        path:":id",
        loadChildren: () => import('./nuevo-espacio-page/nuevo-espacio-page.module').then( m => m.NuevoEspacioPagePageModule)
      }
    ]
    
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'nuevo-abono',
    loadChildren: () => import('./nuevo-abono/nuevo-abono.module').then( m => m.NuevoAbonoPageModule)
  },
  {
    path: 'nuevo-fertilizante',
    loadChildren: () => import('./nuevo-fertilizante/nuevo-fertilizante.module').then( m => m.NuevoFertilizantePageModule)
  },
  {
    path: 'modal-abono-fertilizante',
    loadChildren: () => import('./modal-abono-fertilizante/modal-abono-fertilizante.module').then( m => m.ModalAbonoFertilizantePageModule)
  },
  {
    path: 'ver-espacio',
    loadChildren: () => import('./espacio/ver-espacio/ver-espacio.module').then( m => m.VerEspacioPageModule)
  },
  
 
  {
    path: 'info-window',
    loadChildren: () => import('./info-window/info-window.module').then( m => m.InfoWindowPageModule)
  },
  
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
