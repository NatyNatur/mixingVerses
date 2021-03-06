import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';


import { AppComponent } from './app.component';
import { PoemComponent } from './poem/poem.component';
import { VerseFormComponent } from './verse-form/verse-form.component';
import { VerseCompComponent } from './verse-comp/verse-comp.component';
import { AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';
import { UserRegisterComponent } from './user-register/user-register.component';


// Componentes externos
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { RegistrationModalComponent } from './registration-modal/registration-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth.service';
import { LoginModalComponent } from './login-modal/login-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PoemComponent,
    VerseFormComponent,
    VerseCompComponent,
    UserRegisterComponent,
    RegistrationModalComponent,
    LoginModalComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,  
    BrowserModule,

    // Componentes externos
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AuthService, AngularFireDatabase],
  bootstrap: [AppComponent],
  entryComponents: [
    UserRegisterComponent,
    RegistrationModalComponent,
    LoginModalComponent,
    AppComponent

  ]
})
export class AppModule { }
