import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOfourComponent } from './FourOFour/four-ofour.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './authentification/login/auth.guard';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "auth", loadChildren : () => import('./authentification/authentification.module').then(m => m.AuthentificationModule)},
  { path: 'profil', loadChildren: () => import('./profil/profil.module').then(m => m.ProfilModule), canActivate : [AuthGuard] },

  {path: "**", component: FourOfourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
