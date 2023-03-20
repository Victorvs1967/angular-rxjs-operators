import { map, Observable } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  userService = inject(UserService);

  users: User[] = [];

  ngOnInit(): void {
    this.userList();
  }

  userList(): any {
    this.userService.getUsers()
      .subscribe(data => this.users = data);
  }

}
