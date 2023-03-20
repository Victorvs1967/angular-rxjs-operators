import { modal } from './../../../../services/modal.decorator';
import { Component, Inject } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginData } from 'src/app/models/login-data.model';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  loginForm: UntypedFormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: LoginData,
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [ Validators.required ]],
      password: ['', [ Validators.required ]],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

  @modal(SignupComponent)
  signup() {
  }

}
