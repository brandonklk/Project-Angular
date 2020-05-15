import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { Hero } from './hero';
import { RegisterHeroService } from './service/register-hero.service';


@Component({
  selector: 'hero-register',
  templateUrl: './register-hero.component.html',
  styleUrls: ['./register-hero.component.css']
})
export class RegisterHeroComponent implements OnInit {

  heroForm: FormGroup;
  hero: any;
  patterValeuNull: string;
  
  

  constructor(private router: Router, private heroService: RegisterHeroService) { 

    this.heroForm = this.createFormGroup();
    this.patterValeuNull = '\s';

  }

  ngOnInit(): void { }
  

  createFormGroup(){
    return new FormGroup({
      nameHero: new FormControl(null, [Validators.required]),
      descriptionHero: new FormControl(null, [Validators.required]),
      powerHero: new FormControl(null, [Validators.required])
    });
  }

  onResetForm(){
    this.heroForm.reset();
  }

  createHero(){
    if(this.heroForm.valid){
      
        let createData = {};
        createData['Name'] = this.heroForm.value['nameHero'];
        createData['Description'] = this.heroForm.value['descriptionHero'];
        createData['Power'] = this.heroForm.value['powerHero'];

        if(Object.keys(createData).length !== 0){    
          try {
            this.heroService.insert(createData);
            console.log(createData);
            this.onResetForm();
            alert("Heroi criado com sucesso.")
          } catch (error) {
            console.log(error);
          }
          
        }else{
          console.log("Object is null");
        }
  
    }else{
      console.error("Fields without content");
    }
    
  }

  removeHero(heroId){
    this.heroService.delete(heroId);
  }

  get nameHero(){
    return this.heroForm.get('nameHero');
  }

  get descriptionHero(){
    return this.heroForm.get('descriptionHero');
  }

  get powerHero(){
    return this.heroForm.get('powerHero');
  }

  backHome() {

    this.router.navigate(['herois']);  

  }
  

}
