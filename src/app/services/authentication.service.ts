import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {reject} from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }

  signInUser(email: string, password: string): Promise<void> {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
            console.log('Connecté');
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
    console.log('Déconnecté');
  }
}
