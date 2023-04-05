import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, inject } from '@angular/core';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { modal } from 'src/app/services/modal.decorator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  private auth = inject(SocialAuthService);

  @modal(LoginComponent)
  login() {
  }

  signOut(): void {
    this.auth.signOut();
  }

}
