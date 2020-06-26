import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { ListBooksComponent } from './components/admin/list-books/list-books.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { ModalComponent } from './components/modal/modal.component';

// Services
import { DataApiService } from './services/data-api.service';
import { AuthService } from './services/auth.service';
import { MyBookDatabase } from './services/dexie.service';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';

// Externals
import { NgxSpinnerModule } from 'ngx-spinner';
import {NgxPaginationModule} from 'ngx-pagination';





@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomeComponent,
    NavbarComponent,
    OffersComponent,
    DetailsBookComponent,
    ListBooksComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    TruncateTextPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    NgxSpinnerModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [DataApiService, AuthService, MyBookDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
