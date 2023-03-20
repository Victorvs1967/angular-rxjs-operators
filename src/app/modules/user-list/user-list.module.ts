import { FirebaseModule } from './../firebase/firebase.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    MaterialUiModule,
  ]
})
export class UserListModule { }
