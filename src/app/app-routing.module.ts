import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { RegisterComponent } from './auth/register/register.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoansComponent } from './loans/loans.component';
import { SavingsComponent } from './savings/savings.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detalle-cuenta/:id', component: AccountDetailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'savings', component: SavingsComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
