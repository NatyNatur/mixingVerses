import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthService } from './auth.service';
import { LoginModalComponent } from './login-modal/login-modal.component';

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

  modalRegister = false;
  modalLogin = false;

  constructor(public dialog: MatDialog, public authService:AuthService) {

  }


  showPoem(input) {
    this.poems[input.id] = input.show;
  }
  /* showPoem(mostrar) {
    console.log("Mostrar poema > " + mostrar);
  } */
  
  loginOnClick() {
    let dialogRef = this.dialog.open(LoginModalComponent, {
      width: '250px',
      data: {
        email: '',
        password: ''
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      this.authService.login(result.email, result.password);
    })
  }
  registerOnClick() {
    this.modalRegister = !this.modalRegister;
  }
}
