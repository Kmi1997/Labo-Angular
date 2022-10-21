import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilCoopComponent } from './profil-coop/profil-coop.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { ProfilComponent } from './profil.component';

const routes: Routes = [
  {
    path: "", component: ProfilComponent,
    children: [
      { path: "profilUser", component: ProfilUserComponent },
      { path: "profilCoop", component: ProfilCoopComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
