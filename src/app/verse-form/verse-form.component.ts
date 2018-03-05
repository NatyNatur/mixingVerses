import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-verse-form',
  templateUrl: './verse-form.component.html',
  styleUrls: ['./verse-form.component.css']
})
export class VerseFormComponent implements OnInit {
  verseForm = new FormGroup({
    playerForm: new FormControl(),
    contentForm: new FormControl()
  })


  constructor(private fb:FormBuilder) {

  }

  ngOnInit() {
  }

}
