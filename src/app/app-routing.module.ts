import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';

// DEMO PAGES

// Pages
import {LoginMedicoComponent} from './login/login-medico/login-medico.component';

// Patients Lists
import { DashboardComponent } from './DemoPages/dashboard/dashboard.component';

// Patient Info
import { ProdGuardService } from './guard/prod-guard.service';

const routes: Routes = [
  {path: '', component: LoginMedicoComponent},
  {
    path: '',
    component: BaseLayoutComponent,
    children: [

      // Dashboads

      {path: 'welcome', component: DashboardComponent, canActivate: [ProdGuardService], data: {extraParameter: 'dashboardsMenu'}},

    ]

  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
