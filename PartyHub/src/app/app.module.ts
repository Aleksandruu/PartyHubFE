import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { BuyTicketPageComponent } from './pages/buy-ticket-page/buy-ticket-page.component';
import { ProfilPageComponent } from './pages/profil-page/profil-page.component';
import { EditProfilPageComponent } from './pages/edit-profil-page/edit-profil-page.component';
import { PromoCodePageComponent } from './pages/promo-code-page/promo-code-page.component';
import { ScanTicketsPageComponent } from './pages/scan-tickets-page/scan-tickets-page.component';
import { AddEditPageComponent } from './pages/add-edit-page/add-edit-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsPageComponent,
    EventPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    BuyTicketPageComponent,
    ProfilPageComponent,
    EditProfilPageComponent,
    PromoCodePageComponent,
    ScanTicketsPageComponent,
    AddEditPageComponent,
    AdminPageComponent,
    NavbarComponent,
    HeadbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
