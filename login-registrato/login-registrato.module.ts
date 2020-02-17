import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { LoginRegistratoPage } from './login-registrato.page';
import { BrMaskerModule } from 'br-mask';
import { SelectButtonComponentModule } from 'src/app/components';

const routes: Routes = [
  {
    path: '',
    component: LoginRegistratoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    BrMaskerModule,
    SelectButtonComponentModule
  ],
  declarations: [LoginRegistratoPage]
})
export class LoginRegistratoPageModule {}
