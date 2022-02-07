import { NgModule } from '@angular/core';
import { Router,RouterModule, Routes } from '@angular/router';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpDisplayComponent } from './emp-display/emp-display.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"employess",component:EmpDisplayComponent},
  {path:"addemployee",component:EmpAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
