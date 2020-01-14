import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { ActivityComponent } from '../../components/activity/activity.component';
import { HomebuilderComponent } from '../../components/homebuilder/homebuilder.component';
import { DashboardService } from '../../services/dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [DashboardComponent, ActivityComponent, HomebuilderComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
