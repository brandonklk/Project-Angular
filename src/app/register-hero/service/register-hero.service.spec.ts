import { TestBed } from '@angular/core/testing';

import { RegisterHeroService } from './register-hero.service';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


describe('RegisterHeroService', () => {
  let service: RegisterHeroService;

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFirestore, useValue: FirestoreStub },
      ],

    });
    service = TestBed.inject(RegisterHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created 2', () => {
    expect(service).toBeTruthy();
  });

});
