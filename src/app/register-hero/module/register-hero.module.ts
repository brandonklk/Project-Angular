import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { RegisterHeroComponent } from '../register-hero.component';

import { environment } from '../../../environments/environment';


@NgModule({
  declarations: [
   
    RegisterHeroComponent

  ],
  imports: [

    BrowserModule,
    ReactiveFormsModule,

  ],
  
})

export class RegisterHeroModule { }