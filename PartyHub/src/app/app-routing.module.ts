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

const routes: Routes = [
  { path: '', redirectTo: PATHS.EVENTS, pathMatch: 'full' },
  { component: EventsPageComponent, path: PATHS.EVENTS },
  { component: AddEditPageComponent, path: PATHS.ADDEVENT },
  { component: AddEditPageComponent, path: PATHS.EDITEVENT + '/:id' },
  { component: AdminPageComponent, path: PATHS.ADMIN },
  { component: BuyTicketPageComponent, path: PATHS.BUYTICKET },
  { component: EditProfilPageComponent, path: PATHS.EDITPROFIL + '/:id' },
  { component: EventPageComponent, path: PATHS.EVENT + '/:id' },
  { component: LoginPageComponent, path: PATHS.LOGIN },
  { component: ProfilPageComponent, path: PATHS.PROFIL },
  { component: PromoCodePageComponent, path: PATHS.PROMOCODE },
  { component: RegisterPageComponent, path: PATHS.REGISTER },
  { component: ScanTicketsPageComponent, path: PATHS.SCANTICKETS },
  { component: PromoCodeDetailsComponent, path: PATHS.PROMOCODEDETAILS },
  { component: ForgotPasswordPageComponent, path: PATHS.FORGOTPASSWORD }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
