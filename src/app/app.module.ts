import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PoemComponent } from './poem/poem.component';
import { VerseFormComponent } from './verse-form/verse-form.component';
import { VerseCompComponent } from './verse-comp/verse-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    PoemComponent,
    VerseFormComponent,
    VerseCompComponent
  ],
  imports: [
    ReactiveFormsModule,  
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
