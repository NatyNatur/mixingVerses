import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PoemComponent } from './poem/poem.component';
import { VerseFormComponent } from './verse-form/verse-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PoemComponent,
    VerseFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
