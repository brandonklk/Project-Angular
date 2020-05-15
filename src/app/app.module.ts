import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterHeroModule } from './register-hero/module/register-hero.module';
import { HeroModule } from './hero/module/hero.module';
import { LoginModule } from './login/module/login.module';
import { UsersModule } from './users/module/users.module';
import { PageNotFoundModule } from './not-found/module/page-not-found.module';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterHeroModule,
    HeroModule,
    LoginModule,
    UsersModule,
    PageNotFoundModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
