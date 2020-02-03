import { PatineteService } from './services/patinete.service';
import { VehicleService } from './services/vehicle.service';
import { DialogMapParkingComponent } from './components/parking/dialog-map-parking/dialog-map-parking.component';
import { SharedModule } from './shared/shared.module';
import { UserService } from './services/user.service';
import { EditParkingComponent } from './components/parking/edit-parking/edit-parking.component';
import { AdmParkingComponent } from './components/parking/adm-parking/adm-parking.component';
import { NewParkingComponent } from './components/parking/new-parking/new-parking.component';
import { MaestroService } from './services/maestro-service.service';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from './shared/modules/material.module';
import { routing, appRoutingProviders } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NgBusyModule } from 'ng-busy';
import { SugerenciasComponent } from './components/sugerencias/sugerencias.component';
import { MAT_DATE_LOCALE } from '@angular/material';
import { DataTableModule } from 'primeng/datatable';
import { DropdownModule } from 'primeng/primeng';
import { ListSugerenciasComponent } from './components/list-sugerencias/list-sugerencias.component';
import { ParkingService } from './services/parking.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { DialogParkingComponent } from './components/parking/dialog-parking/dialog-parking.component';
import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './components/footer/footer.component';
import { HttpTokenInterceptor } from './interceptors/http-token.interceptor';
import { DialogSugerenciasComponent } from './components/list-sugerencias/dialog-sugerencias/dialog-sugerencias.component';
import { BenefitComponent } from './components/benefit/benefit.component';
import { SearchPatineteComponent } from './components/search-patinete/search-patinete.component';
import { DialogUpdatePatineteComponent } from './components/search-patinete/dialog-update-patinete/dialog-update-patinete.component';
@NgModule({
  declarations: [
    AppComponent,
    DialogUpdatePatineteComponent,
    PrincipalComponent,
    LoginComponent,
    DialogParkingComponent,
    SidebarComponent,
    RegisterComponent,
    MenuComponent,
    AdmParkingComponent,
    NewParkingComponent,
    EditParkingComponent,
    SugerenciasComponent,
    ListSugerenciasComponent,
    DialogMapParkingComponent,
    SearchPatineteComponent,
    FooterComponent,
    DialogSugerenciasComponent,
    BenefitComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    MaterialModule,
    DataTableModule,
    DropdownModule,
    HttpClientModule,
    BrowserAnimationsModule,
    routing,
    OverlayModule, ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDrxCURGOr6ViOwz8NHaiqPnpnWpyXaxD0',
      libraries: ['drawing']
    }),
    // BUSY
    NgBusyModule
    // ProveedorModule
  ],
  entryComponents: [DialogUpdatePatineteComponent],
  providers: [appRoutingProviders,
    MaestroService,
    PatineteService,

    ParkingService,
    UserService,
    ApiService,
    VehicleService,
    { provide: MAT_DATE_LOCALE, useValue: 'es-Es' },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
