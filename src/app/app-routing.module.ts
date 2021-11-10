import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';

// DEMO PAGES

// Pages
import {LoginMedicoComponent} from './login/login-medico/login-medico.component';

// Patients Lists
import { PatientListComponent } from './DemoPages/patient-list/patient-list/patient-list.component';

// Patient Info
import { InformationPatientComponent } from './DemoPages/information-patient/information-patient.component';
import { ProdGuardService } from './guard/prod-guard.service';

const routes: Routes = [
  {path: '', component: LoginMedicoComponent},
  {
    path: '',
    component: BaseLayoutComponent,
    children: [

      // Dashboads

      {path: 'welcome', component: PatientListComponent, canActivate: [ProdGuardService], data: {extraParameter: 'dashboardsMenu'}},

      // Tables

      {path: 'info/:id', component: InformationPatientComponent, canActivate: [ProdGuardService], data: {extraParameter: 'tablesMenu'}},

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
