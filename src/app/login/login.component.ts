import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  loginForm = new FormGroup ({
    useremail: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    //TODO: use EventEmitter with form value
    console.warn(this.loginForm.value);
  }

}
