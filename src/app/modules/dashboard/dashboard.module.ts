import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { CreateStoryPage } from './pages/create-story/create-story.page';
import { MaterialDesignModule } from './../../shared/modules/material-design/material-design.module';


@NgModule({
  declarations: [DashboardPage, CreateStoryPage],
  imports: [
    CommonModule,
    MaterialDesignModule,

  ]
})
export class DashboardModule { }
