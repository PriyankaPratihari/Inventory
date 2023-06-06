import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayInventoryComponent } from './display/display.component';
import { CreateInventoryComponent } from './create/create.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'create', pathMatch: 'full', component: CreateInventoryComponent },
  { path: 'display', pathMatch: 'full', component: DisplayInventoryComponent},
  // { path: 'login' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
