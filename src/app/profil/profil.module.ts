import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil.component';
import { ProfilCoopComponent } from './profil-coop/profil-coop.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';


@NgModule({
  declarations: [
    ProfilComponent,
    ProfilCoopComponent,
    ProfilUserComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule
  ]
})
export class ProfilModule { }
