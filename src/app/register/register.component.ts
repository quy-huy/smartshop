import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
  });

  onSubmit() {
    //TODO: use EventEmitter with form value
    console.warn(this.registerForm.value);
  }
}
