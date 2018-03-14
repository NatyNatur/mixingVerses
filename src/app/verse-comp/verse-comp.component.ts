import { Component, OnInit, Input } from '@angular/core';
import { Verse } from '../verse';

@Component({
  selector: 'app-verse-comp',
  templateUrl: './verse-comp.component.html',
  styleUrls: ['./verse-comp.component.css']
})
export class VerseCompComponent implements OnInit {
  @Input() verse:any;

  constructor() { }

  ngOnInit() {
  }

}
