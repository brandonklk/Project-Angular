import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { PageNotFoundComponent } from '../page-not-found.component';

@NgModule({
  declarations: [
   
    PageNotFoundComponent

  ],
  imports: [

    BrowserModule,
    RouterTestingModule,

  ],
  exports:[

    PageNotFoundComponent
    
  ],
  
})

export class PageNotFoundModule { }