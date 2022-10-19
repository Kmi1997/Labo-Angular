import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilCoopComponent } from './profil-coop/profil-coop.component';
import { ProfilComponent } from './profil.component';

const routes: Routes = [
  { path: 'profilUser', component: ProfilComponent },
  { path: 'profilCoop', component: ProfilCoopComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
