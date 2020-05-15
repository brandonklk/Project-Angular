 import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterHeroComponent } from './register-hero.component';

describe('RegisterComponent', () => {
  let component: RegisterHeroComponent;
  let fixture: ComponentFixture<RegisterHeroComponent>;
  let dg: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterHeroComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHeroComponent);
    component = fixture.componentInstance;
    dg = fixture.debugElement;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
