import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Verse } from '../verse';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {
  // índice del poema
  @Input() id:number;
  // @[decorador], esto es otra cosa 
  // showVerses = false
  @Input() showVerses:boolean;
  // EventEmitter lo provee Angular, es un evento, recibe como parámetro un boolean (el callback)
  // @Output() onMostrar = new EventEmitter<boolean>()
  @Output() onShow = new EventEmitter<any>(); 
  // verse es un arreglo de strings, 
  verses:Array<Verse> = [];
  constructor() {
    let newVerse = new Verse();
    newVerse.playerName = "La computadora";
    newVerse.content = "Cuando supe la noticia de que ya no me querías";
    this.verses.push(newVerse);
  }
  // se ejecuta inmediatamente luego del constructor, todo fue cargado, es como el $(document).ready()
  ngOnInit() {
  }

  onSubmit(verse:Verse) {
    this.verses.push(verse);
  }

  showOnClick() {
    // console.log('Holi');
    // se emite un evento, se le pasa un boolean
    this.onShow.emit({
      show: !this.showVerses,
      id: this.id
    })
  }
}
