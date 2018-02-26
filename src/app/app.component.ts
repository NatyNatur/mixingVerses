import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cadaver Exquisito';
  // el enlace de datos es inmediato
  poems = [
    true,
    true
  ];

  showPoem(input) {
    this.poems[input.id] = input.show;
  }
  /* showPoem(mostrar) {
    console.log("Mostrar poema > " + mostrar);
  } */
}
