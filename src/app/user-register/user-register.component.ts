import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RegistrationModalComponent } from '../registration-modal/registration-modal.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(public dialog: MatDialog, public authService:AuthService) { }

  openDialog():void {
    let dialogRef = this.dialog.open(RegistrationModalComponent, {
      width: '250px',
      data: {}
    });
  // una referencia es la forma de acceder a la información ingresada en el diálogo
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  ngOnInit() {
    // this.openDialog();
  }

  ngAfterViewInit() {
    this.authService.user.subscribe((user) => {
      if (user) {
        // Todavía no
      } else {
        this.openDialog();
      }
    })
  }
}
