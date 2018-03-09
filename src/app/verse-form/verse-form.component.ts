import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Verse } from '../verse';

@Component({
  selector: 'app-verse-form',
  templateUrl: './verse-form.component.html',
  styleUrls: ['./verse-form.component.css']
})
export class VerseFormComponent implements OnInit {
  @Input() verse:Verse = new Verse();
  @Output() submit = new EventEmitter<Verse>()
  verseForm:FormGroup; 

  constructor(private fb:FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  ngOnChanges(){
     
  }

  createForm(){
    this.verseForm = this.fb.group({
      playerForm: [this.verse.playerName, [Validators.required, Validators.minLength(4)]],
      contentForm: [this.verse.content],
      indice: [0, Validators.min(0)]
    });
    /* this.verseForm.patchValue({
      playerForm: this.verse.playerName,
      content: this.verse.content
    })*/
    this.verseForm.valueChanges.subscribe(() => {
      this.verse.playerName = this.verseForm.value.playerForm;
      this.verse.content = this.verseForm.value.contentForm;
    })
  }
}
