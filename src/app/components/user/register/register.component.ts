import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserInterface } from '../../../models/user-interface.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms/';
import { MyBookDatabase, db } from '../../../services/dexie.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  
  constructor(private authService: AuthService, private router: Router, private location: Location) { }

  public user: UserInterface = {
    name: '',
    email: '',
    password: ''
  };
  public isError = false;
  public msgError = '';

  ngOnInit(): void {
  }

  onRegister(form: NgForm): void {
    if (form.valid) {
      this.authService
        .registerUser(this.user.name, this.user.email, this.user.password)
        .subscribe(user => {
          this.authService.setUser(user);
          const token = user.id;
          this.authService.setToken(token);
          this.router.navigate(['/user/profile']);
          location.reload();
        },
        res => {
          this.msgError = res.error.error.details.messages.email;
          this.onIsError();
        });
        const myDB = db;
        myDB.users.add(this.user);
        console.log('saving users to indexeddb using dexie');
        myDB.users.toArray().then(users => console.log(users));
    } else {
      this.onIsError();
    }

  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

}
