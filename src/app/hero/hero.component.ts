import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterHeroService } from '../register-hero/service/register-hero.service';

@Component({
  selector: 'hero-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: any;
  dataEmpty: boolean;
 
  constructor(private router: Router, private heroService: RegisterHeroService) { }

  ngOnInit(): void {

    this.heroService.getAllHero().subscribe(data => {
      this.dataEmpty = data.length <= 0
      if(!this.dataEmpty || data.length === 0){
            this.hero = data.map(e => {
              return {
                id: e.payload.doc.id,
                Name: e.payload.doc.data()['Name'],
                Description: e.payload.doc.data()['Description'],
                Power: e.payload.doc.data()['Power'],
              };
            })
            console.log(this.hero);
        }
      });
    }  
   
  removeHero(heroId){
    this.heroService.delete(heroId);
  }

  registerNewHero(){
    this.router.navigate(['registrar-heroi']);   
  }

  disconnects(){
    this.router.navigate(['login']);
  }

}
