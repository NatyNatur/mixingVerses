import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Verse } from '../verse';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

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
  verses: FirebaseListObservable<any[]>;
  constructor(private af:AngularFireDatabase) {
    /* 
    let newVerse = new Verse();
    newVerse.playerName = "La computadora";
    newVerse.content = "Cuando supe la noticia de que ya no me querías";
    this.verses.push(newVerse);*/
  }
  // se ejecuta inmediatamente luego del constructor, todo fue cargado, es como el $(document).ready()
  ngOnInit() {
    this.verses = this.af.list('/verses');
  }

  onSubmit(verse:Verse) {
    this.verses.push({content: verse.content, player:verse.playerName});
  }

  showOnClick() {
    // console.log('Holi');
    // se emite un evento, se le pasa un boolean
    this.onShow.emit({
      show: !this.showVerses,
      id: this.id
    })
  }
// void - no retorna nada, no se espera nada de ella
  addVerse(player: string, verse: string):void{

  }
}
