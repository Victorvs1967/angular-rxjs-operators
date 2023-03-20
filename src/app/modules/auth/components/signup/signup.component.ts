import { UserService } from 'src/app/services/user.service';
import { Component, Inject } from '@angular/core';
import { UntypedFormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { map } from 'rxjs';

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
    private userService: UserService,
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
    const user: User = {
      ...this.signupForm.value,
      onCreate: (new Date()).toUTCString(),
      onUpdate: (new Date()).toUTCString(),
    };

    this.userService.addUser(user)
       .subscribe();
  }

}

