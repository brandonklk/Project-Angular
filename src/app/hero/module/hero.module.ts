import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeroComponent } from '../hero.component';

@NgModule({
  declarations: [
    
    HeroComponent
    
  ],
  imports: [

    BrowserModule

  ],
  exports:[
    HeroComponent
  ],
  providers: [],
  bootstrap: [ HeroComponent ]
})

export class HeroModule { }