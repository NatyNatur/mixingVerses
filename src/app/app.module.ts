import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { PoemComponent } from './poem/poem.component';
import { VerseFormComponent } from './verse-form/verse-form.component';
import { VerseCompComponent } from './verse-comp/verse-comp.component';
import { AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PoemComponent,
    VerseFormComponent,
    VerseCompComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,  
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
