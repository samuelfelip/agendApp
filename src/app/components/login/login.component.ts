import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email : string;
  public password : string;

  constructor(
    public authService : AuthService,
    public router : Router,
    public mensaje : FlashMessagesService

  ) { }

  ngOnInit() {
  }
  
  onSubmitLogin(){
    this.authService.loginEmail(this.email,this.password)
    .then((res) => {
      this.router.navigate(['/private']);
      console.log('Bien! , logueado...');
      this.mensaje.show('Usuario Logueado Correctamente!',
      {cssClass: 'alert-success', timeout: 3500});
    }).catch((err) => {
      this.mensaje.show(err.message,
      {cssClass: 'alert-danger', timeout: 3500});
      console.log(err);
      this.router.navigate(['/login']);
    });
  }
}






