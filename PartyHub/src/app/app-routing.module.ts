import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { PATHS } from './constants/paths';
import { AddEditPageComponent } from './pages/add-edit-page/add-edit-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { BuyTicketPageComponent } from './pages/buy-ticket-page/buy-ticket-page.component';
import { EditProfilPageComponent } from './pages/edit-profil-page/edit-profil-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilPageComponent } from './pages/profil-page/profil-page.component';
import { PromoCodePageComponent } from './pages/promo-code-page/promo-code-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ScanTicketsPageComponent } from './pages/scan-tickets-page/scan-tickets-page.component';
import { PromoCodeDetailsComponent } from './pages/promo-code-details/promo-code-details.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { adminGuard } from './guards/admin.guard';
import { logoutGuard } from './guards/logout.guard';
import { scannerGuard } from './guards/scanner.guard';
import { userGuard } from './guards/user.guard';
import { EnterEmailPageComponent } from './pages/enter-email-page/enter-email-page.component';
import { VerifyAccountPageComponent } from './pages/verify-account-page/verify-account-page.component';


const routes: Routes = [
  { path: '', redirectTo: PATHS.EVENTS, pathMatch: 'full' },
  { component: EventsPageComponent, path: PATHS.EVENTS },
  {
    component: AddEditPageComponent,
    path: PATHS.ADDEVENT,
    canActivate: [adminGuard],
  },
  {
    component: AddEditPageComponent,
    path: PATHS.EDITEVENT + '/:id',
    canActivate: [adminGuard],
  },
  {
    component: AdminPageComponent,
    path: PATHS.ADMIN,
    canActivate: [adminGuard],
  },
  { component: BuyTicketPageComponent, path: PATHS.BUYTICKET },
  {
    component: EditProfilPageComponent,
    path: PATHS.EDITPROFILE,
    canActivate: [userGuard],
  },
  { component: EventPageComponent, path: PATHS.EVENT + '/:id' },
  {
    component: LoginPageComponent,
    path: PATHS.LOGIN,
    canActivate: [logoutGuard],
  },
  {
    component: ProfilPageComponent,
    path: PATHS.PROFILE,
    canActivate: [userGuard],
  },
  {
    component: PromoCodePageComponent,
    path: PATHS.PROMOCODE,
    canActivate: [userGuard],
  },
  {
    component: RegisterPageComponent,
    path: PATHS.REGISTER,
    canActivate: [logoutGuard],
  },
  {
    component: VerifyAccountPageComponent,
    path: PATHS.VERIFYACCOUNT + '/:token',
    canActivate: [logoutGuard],
  },
  {
    component: ScanTicketsPageComponent,
    path: PATHS.SCANTICKETS,
    canActivate: [scannerGuard],
  },
  {
    component: PromoCodeDetailsComponent,
    path: PATHS.PROMOCODEDETAILS,
    canActivate: [userGuard],
  },
  {
    component: ForgotPasswordPageComponent,
    path: PATHS.FORGOTPASSWORD,
    canActivate: [logoutGuard],
  },
  {
    component: EnterEmailPageComponent,
    path: PATHS.EMAILFORRESET,
    canActivate: [logoutGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
