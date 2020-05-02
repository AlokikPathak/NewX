import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { ForgetPasswordPage } from './pages/forget-password/forget-password.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { ErrorPage } from './pages/error/error.page';

const routes: Routes = [
    { 
      path: '', 
      component: SignInPage,
    },
    {
        path: 'signup',
        component: SignUpPage,
    },
    {
        path: 'forget',
        component: ForgetPasswordPage,
    },
    {
        path: 'error',
        component: ErrorPage,
    },
    {
        path: 'not-found',
        component: NotFoundPage,
    },
  
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SessionRoutingModule { }