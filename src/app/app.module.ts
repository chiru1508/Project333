import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmpDisplayComponent } from './emp-display/emp-display.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpDeleteComponent } from './emp-delete/emp-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EmpDisplayComponent,
    EmpEditComponent,
    EmpAddComponent,
    EmpDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
