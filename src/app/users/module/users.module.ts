import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsersComponent } from '../users.component';

@NgModule({
  declarations: [

    UsersComponent

  ],
  imports: [

    BrowserModule
    
  ],
  exports:[
    UsersComponent
  ],
 
})

export class UsersModule { }