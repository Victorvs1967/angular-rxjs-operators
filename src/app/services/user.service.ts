import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersRef: AngularFireList<User>;

  constructor(private db: AngularFireDatabase) {
    this.usersRef = this.db.list<User>(environment.usersURL);
  }

  getUsers(): Observable<User[]> {
    return this.usersRef
      .snapshotChanges()
        .pipe(
          map(changes => changes
            .map((c: any) => ({ id: c.payload.key, ...c.payload.val() }))
          )
        );
  }

  getUser(id: string): Observable<any> {
    return this.usersRef
      .snapshotChanges();
  }

  addUser(user: User): Observable<any> {
    return of(this.usersRef.push(user));
  }

  updateUser(id: string, value: any): Promise<void> {
    return this.usersRef.update(id, value);
  }

  deleteUser(id: string): Promise<void> {
    return this.usersRef.remove(id);
  }
}
