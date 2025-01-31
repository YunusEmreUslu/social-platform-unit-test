import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService { 

  users = [
    {id: 1, name: "Ahmet Er"},
    {id: 2, name: "John Smith"}
  ]

  constructor() { }

  getUsers(){
    return of(this.users)
  }
}
