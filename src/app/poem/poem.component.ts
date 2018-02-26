import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

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
  verses:Array<String> = [
    "Cuando supe la noticia de que ya no me querías",
    "hasta el perro de mi casa me miraba y se reía",
    "los zapaticos me aprietan y las medias me dan calor",
    "del cielo cayó una rosa y el viento se la llevó",
    "p de pizza, p de pasta, pepperoni",
    "yo sigo vacilando las penas olvidando"
  ];
  constructor() { }
  // se ejecuta inmediatamente luego del constructor, todo fue cargado, es como el $(document).ready()
  ngOnInit() {
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
