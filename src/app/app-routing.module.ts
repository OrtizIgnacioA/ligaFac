import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'partidos',
    loadChildren: () => import('./partidos/partidos.module').then( m => m.PartidosPageModule)
  },
  {
    path: 'tabla',
    loadChildren: () => import('./tabla/tabla.module').then( m => m.TablaPageModule)
  },
  {
    path: 'fixture',
    loadChildren: () => import('./fixture/fixture.module').then( m => m.FixturePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
