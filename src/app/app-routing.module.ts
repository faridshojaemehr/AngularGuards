import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './core/gurds/auth.guard';
import { BubelsComponent } from './components/bubels/bubels.component';
import { roledGuard } from './core/gurds/roled.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard, roledGuard],
    data: {
      expectedRole: ['Admin', 'Editor'],
    },
  },
  {
    path: 'bubble',
    component: BubelsComponent,
    canActivate: [authGuard, roledGuard],
    data: {
      expectedRole: ['Manager'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
