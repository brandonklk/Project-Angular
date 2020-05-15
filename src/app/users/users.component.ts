import { Component, OnInit } from '@angular/core';
import { RegisterHeroComponent } from '../register-hero/register-hero.component';
import { RegisterHeroService } from '../register-hero/service/register-hero.service';

@Component({
  selector: 'hero-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private rs: RegisterHeroService) { }

  
  ngOnInit(): void {
  }

  

  insertRegister(){
    let createData = {};
      for(var value = 1; value <= 1; value++){
        createData['Name'] = "usuario" + value;
        createData['Description'] = "descrição" + value;
        createData['Power'] = "poder" + value;
        this.rs.insert(createData);
      }
     console.log(createData);   
    
  }

}
