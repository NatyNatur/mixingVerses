import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css']
})
export class RegistrationModalComponent implements OnInit {
  // importo formulario
  userForm:FormGroup;

  constructor(private fb:FormBuilder, public dialogRef: MatDialogRef<RegistrationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      'email': [''],
      'password': ['']

    })
  }

  onRegister() {
    this.data.email = this.userForm.value.email;
    this.data.password = this.userForm.value.password;
    this.dialogRef.close(this.data);
    // se manda lo ingresado a través de data, es un inyectable

  }
}
