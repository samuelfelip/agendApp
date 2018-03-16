 import { Component, OnInit } from '@angular/core';
 import { AuthService } from '../../services/auth.service';
 import { Router } from '@angular/router';
 import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public email : string;
  public password : string;
  constructor(
    public authService : AuthService,
    public router : Router,
    public mensaje : FlashMessagesService
  ) { 
    
  }

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.authService.registerUser(this.email,this.password)
    .then((res) => {
      this.mensaje.show('Usuario Creado Correctamente!',
      {cssClass: 'alert-success', timeout: 3500});
      this.router.navigate(['/private']);
      console.log('Bien!');
      console.log(res);
    }).catch((err) => {
      this.mensaje.show(err.message,
      {cssClass: 'alert-danger', timeout: 3500});
      console.log(err);
    });
  }
}
