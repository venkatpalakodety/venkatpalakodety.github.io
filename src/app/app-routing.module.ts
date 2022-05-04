import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule)
}, {
  path: 'portfolio',
  loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
