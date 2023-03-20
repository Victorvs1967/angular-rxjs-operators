import { modal } from './../../../../services/modal.decorator';
import { Component, inject } from '@angular/core';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  @modal(LoginComponent)
  login() {
  }
}
