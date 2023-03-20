import { Component, Inject } from '@angular/core';
import { UntypedFormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { authDialog } from '../auth.decorator';
import { User } from 'src/app/models/user.model';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent {

  signupForm: UntypedFormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private formBuilder: FormBuilder,
  ) {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', ],
      lastName: ['', ],
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

}

