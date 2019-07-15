import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  loginForm = new FormGroup ({
    useremail: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6))
  });

 

  onSubmit() {
    //TODO: use EventEmitter with form value
    console.warn(this.loginForm.value);
  }

}
