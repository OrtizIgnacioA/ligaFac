import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'partidos',
        loadChildren: () => import('../partidos/partidos.module').then(m => m.PartidosPageModule)
      },
      {
        path: 'tabla',
        loadChildren: () => import('../tabla/tabla.module').then(m => m.TablaPageModule)
      },
      {
        path: 'fixture',
        loadChildren: () => import('../fixture/fixture.module').then(m => m.FixturePageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/home/partidos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
