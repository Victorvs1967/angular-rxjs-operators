<<<<<<< HEAD
<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, inject } from '@angular/core';
>>>>>>> origin/feature
=======
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit, inject } from '@angular/core';
import { tap } from 'rxjs';
>>>>>>> origin/feature
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { modal } from 'src/app/services/modal.decorator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  private auth = inject(SocialAuthService);

  user?: SocialUser;
  loggedIn: boolean = false;

  ngOnInit(): void {
    this.auth.authState
      .pipe(tap(user => {
          this.user = user;
          this.loggedIn = (user != null);
        }
      ))
      .subscribe()
  }

  @modal(LoginComponent)
  login() {
  }

  signOut(): void {
    this.auth.signOut();
  }

}
