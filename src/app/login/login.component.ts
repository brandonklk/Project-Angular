import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'hero-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(

    private router: Router
    
  ) { }

  ngOnInit(): void {
  }

  accessEnvironment(){
    
    this.router.navigate(['herois']);
    
  }

}
