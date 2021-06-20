import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' 
  },
  { 
    path: 'dashboard', 
    loadChildren: () => import('./views/dasboard/dasboard.module').then(m => m.DasboardModule) 
  },
  { 
    path: 'home', 
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'container', 
    loadChildren: () => import('./views/container/container/container.module').then(m => m.ContainerModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
