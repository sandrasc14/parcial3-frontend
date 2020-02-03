import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent implements OnInit {
  public title = '';
  public user: any = {};
  public errorMessage;
  public productos: any[] = [];

  public identity: any;
  public token;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router) {
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  signIn() {
    this._userService.loginUser(this.user).subscribe(
      response => {
        console.log(response);
      });
  }

  loginUser() {

    // conseguir los datos del usuario identificado
    this._userService.loginUser(this.user).subscribe(
      response => {
        let identity = response.user;
        this.identity = identity;

        if (!this.identity._id) {
          alert('El usuario no esta correctamente identificado');
        }
        else {
          // crear elemento en el localstorage para tener al usuario en sesion
          localStorage.setItem('identity', JSON.stringify(identity));
          // conseguir el token para enviarselo a cada peticion HTTP
          this._userService.loginUser(this.user, 'true').subscribe(
            response => {
              let token = response.token;
              this.token = token;

              if (this.token.length <= 0) {
                alert("El token no se ha generado correctamente");
              }
              else {
                // crear elemento en el localstorage para tener al token disponible
                localStorage.setItem('token', token);
                this._router.navigate(['/administration/mant-parking']);
              }
            },

            error => {
              this.errorMessage = error.message;
            }
          );
        }
      },

      error => {
        this.errorMessage = error.message;
      }
    );
  }

  logout() {
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this.errorMessage = null;

  }
}
