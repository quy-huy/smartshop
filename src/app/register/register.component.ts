import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
import {MustMatch} from '../_helpers/must-match.validator'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup;
submitted = false;

constructor(private formBuilder: FormBuilder) {}

ngOnInit() {
  this.registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['',Validators.required],
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    phone: ['', Validators.minLength(10)]
  }, {
    validator: MustMatch('password', 'confirmPassword')
  });
}

get f() {return this.registerForm.controls;}
  onSubmit() {
    //TODO: use EventEmitter with form value
    this.submitted = true;

    if(this.registerForm.invalid) {
      return;
    }
    alert('SUCCESS!!' +JSON.stringify(this.registerForm.value))
  }
}
