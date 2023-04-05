import { Component, inject, OnInit } from '@angular/core';
import { filter, map, merge, Observable, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.sass']
})
export class OperatorsComponent implements OnInit {

  userService = inject(UserService);

  ngOnInit(): void {
    // this.mapOperator().subscribe(name => console.log(name));
    // this.mergeOperator().subscribe();
  }

  mapOperator(): Observable<any> {
    return this.userService.getUsers()
      .pipe(map(users => users.map(user => user.username)));
  }

  mergeOperator(): Observable<any> {
    return this.userService.getUsers()
      .pipe(map(users =>
        merge(
          users.filter(user => user.username?.includes('j')).map(user => ({...user, avatar: 'avatarUrl'})),
          users.filter(user => !user.username?.includes('j'))
        )
        .subscribe(users => console.log(users))
      ));
  }

}
