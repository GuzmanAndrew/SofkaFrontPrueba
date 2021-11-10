import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgReduxModule} from '@angular-redux/store';
import {NgRedux, DevToolsExtension} from '@angular-redux/store';
import {rootReducer, ArchitectUIState} from './ThemeOptions/store';
import {ConfigActions} from './ThemeOptions/store/config.actions';
import {AppRoutingModule} from './app-routing.module';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';

import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

// BOOTSTRAP COMPONENTS

import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {ChartsModule} from 'ng2-charts';

// LAYOUT

import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';

// HEADER

import {HeaderComponent} from './Layout/Components/header/header.component';

// SIDEBAR

import {SidebarComponent} from './Layout/Components/sidebar/sidebar.component';
import {LogoComponent} from './Layout/Components/sidebar/elements/logo/logo.component';

// FOOTER

import {FooterComponent} from './Layout/Components/footer/footer.component';

// DEMO PAGES


// Pages

import { LoginMedicoComponent } from './login/login-medico/login-medico.component';

import { FilterPipe } from './pipeslistapaciente/filter.pipe';

import {NgxPaginationModule} from 'ngx-pagination';
import { PatientListComponent } from './DemoPages/patient-list/patient-list/patient-list.component';
import { PresionChartComponent } from './DemoPages/patient-charts/presion-chart/presion-chart.component';
import { OxigenoChartComponent } from './DemoPages/patient-charts/oxigeno-chart/oxigeno-chart.component';
import { FrecuenciaChartComponent } from './DemoPages/patient-charts/frecuencia-chart/frecuencia-chart.component';
import { TemperaturaChartComponent } from './DemoPages/patient-charts/temperatura-chart/temperatura-chart.component';
import { PresionTableComponent } from './DemoPages/patient-tables/presion-table/presion-table.component';
import { OxigenoTableComponent } from './DemoPages/patient-tables/oxigeno-table/oxigeno-table.component';
import { FrecuenciaTableComponent } from './DemoPages/patient-tables/frecuencia-table/frecuencia-table.component';
import { TemperaturaTableComponent } from './DemoPages/patient-tables/temperatura-table/temperatura-table.component';
import { InformationPatientComponent } from './DemoPages/information-patient/information-patient.component';

// Angular Material
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {MatTabsModule} from '@angular/material/tabs';
import { UserDropdownComponent } from './Layout/Components/elements/user-dropdown/user-dropdown.component';

import { interceptorProvider } from './interceptor/prod-interceptor.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [

    // LAYOUT

    AppComponent,
    BaseLayoutComponent,

    // HEADER

    HeaderComponent,

    // SIDEBAR

    SidebarComponent,
    LogoComponent,

    // FOOTER

    FooterComponent,

    // DEMO PAGES
    
    LoginMedicoComponent,
    FilterPipe,
    PatientListComponent,
    PresionChartComponent,
    OxigenoChartComponent,
    FrecuenciaChartComponent,
    TemperaturaChartComponent,
    PresionTableComponent,
    OxigenoTableComponent,
    FrecuenciaTableComponent,
    TemperaturaTableComponent,
    InformationPatientComponent,
    UserDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgReduxModule,
    CommonModule,
    LoadingBarRouterModule,

    // Angular Bootstrap Components

    PerfectScrollbarModule,
    NgbModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Charts

    ChartsModule,

    // Angular Material

    MatTabsModule,

    NgxPaginationModule,

    FontAwesomeModule
  ],
  providers: [
    interceptorProvider,
    {
      provide:
      PERFECT_SCROLLBAR_CONFIG,
      // DROPZONE_CONFIG,
      useValue:
      DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      // DEFAULT_DROPZONE_CONFIG,
    },
    ConfigActions
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private ngRedux: NgRedux<ArchitectUIState>,
              private devTool: DevToolsExtension) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as ArchitectUIState,
      [],
      [devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

  }
}
