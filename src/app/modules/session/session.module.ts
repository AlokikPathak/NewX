import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { SessionRoutingModule } from './session-routing.module';
import { MaterialDesignModule } from './../../shared/modules/material-design/material-design.module';
import { ForgetPasswordPage } from './pages/forget-password/forget-password.page';
import { ErrorPage } from './pages/error/error.page';
import { NotFoundPage } from './pages/not-found/not-found.page'

@NgModule({
  declarations: [SignInPage, SignUpPage, ForgetPasswordPage, ErrorPage, NotFoundPage],
  imports: [
    CommonModule,
    SessionRoutingModule,
    MaterialDesignModule,
  ]
})
export class SessionModule { }
