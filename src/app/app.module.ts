import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { FormsModule } from '@angular/forms';
import { EquipmentService } from './services/equipment.service';
import { AuthComponent } from './auth/auth.component';
import { EquipmentViewComponent } from './equipment-view/equipment-view.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleEquipmentComponent } from './single-equipment/single-equipment.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';

const equipRoutes: Routes = [
  { path: 'equipments', canActivate: [AuthGuard], component: EquipmentViewComponent },
  { path: 'equipments/:id', canActivate: [AuthGuard], component: SingleEquipmentComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: EquipmentViewComponent },
  { path: 'not-found', component: FourOhFourComponent} ,
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    EquipmentComponent,
    AuthComponent,
    EquipmentViewComponent,
    SingleEquipmentComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(equipRoutes)
  ],
  providers: [
    EquipmentService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
