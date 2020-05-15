import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegisterHeroService {

  constructor(private firestore: AngularFirestore) { }

  insert(createData){
    this.firestore.collection('heros').add(createData);
  }

  update(createData, heroId){
    this.firestore.doc(`heros/${heroId}`).update(createData);
  }

  delete(heroId){
    this.firestore.doc(`heros/${heroId}`).delete();
  }

  getAllHero(){
    return this.firestore.collection('heros').snapshotChanges();
  }


}
