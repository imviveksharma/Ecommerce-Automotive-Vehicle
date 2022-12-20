import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { RegisterscreenComponent } from './registerscreen/registerscreen.component';

const routes: Routes = [
  { path:"login",
      component:LoginscreenComponent
    },
    {
      path:"register",
      component:RegisterscreenComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
