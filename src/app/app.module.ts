import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateComponent } from './components/private/private.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from '../environments/environment'
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { PeopleComponent } from './components/people/people.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { PersonComponent } from './components/people/person/person.component';
import {PersonService} from './services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    PrivateComponent,
    NotFoundComponent,
    HomeComponent,
    PeopleComponent,
    PeopleListComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule

    
  ],
  providers: [AuthService,AuthGuard,FlashMessagesService,PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
