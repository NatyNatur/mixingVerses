import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
// programación reactiva
// la interfaz debe estar preparada para hacer el cambio inmediatamente
// si se cambia el poema, en la pantalla del segundo jugador debe aparecer el cambio
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  constructor(private firebaseAuth:AngularFireAuth) {
    // para saber el estado de login del usuario
    this.user = firebaseAuth.authState;
   }

   signup(email:string, password:string){
     this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Success!!!', value);
      })
      .catch((error) => {
        console.log('We failed cuz >' + error);
      })
   }
   login(email:string, password:string) {
     this.firebaseAuth
     .auth
     .signInWithEmailAndPassword(email, password)
     .then((value)=> {
       console.log('Success!! ah-ha:', value);
     })
     .catch((error)=>{
       console.log('We failed again cuz > ' + error);
     })
   }

}
