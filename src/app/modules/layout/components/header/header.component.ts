import { Component, inject } from '@angular/core';
import { authDialog } from 'src/app/modules/auth/components/auth.decorator';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  @authDialog(LoginComponent)
  login() {
  }
}
