import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignUpPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule, ReactiveFormsModule
  ]
})
export class AuthModule { }
