import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "profil", loadChildren: () => import('../profil/profil.module').then(m => m.ProfilModule), canActivate : [AuthGuard]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AuthentificationRoutingModule { }
