import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayout } from './core/admin/admin.layout';
import { AuthLayout } from './core/auth/auth.layout';
import { DashboardPage } from './modules/dashboard/pages/dashboard/dashboard.page';
import { CreateStoryPage } from './modules/dashboard/pages/create-story/create-story.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLayout,
    children: [
      {
        path: '',
        component: DashboardPage,
      },
      {
        path: 'create',
        component: CreateStoryPage,
      }
    ]
  }, {
    path: 'session',
    component: AuthLayout,
    children: [{
        path: '',
        loadChildren: () => import('./modules/session/session.module').then(m => m.SessionModule)
    
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
