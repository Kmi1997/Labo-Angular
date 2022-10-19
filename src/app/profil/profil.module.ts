import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil.component';
import { ProfilCoopComponent } from './profil-coop/profil-coop.component';


@NgModule({
  declarations: [
    ProfilComponent,
    ProfilCoopComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    HttpClientModule
  ]
})
export class ProfilModule { }
