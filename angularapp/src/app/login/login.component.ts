import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { loginRequestDTO, loginResponseDTO } from './login';
import { parsearErroresAPI } from '../utilidades/utilidades';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private loginService: LoginService ) {  }

  loginRP!: loginResponseDTO[];
  errores: string[] = [];

  Ingresar(email: string, contra: string) {

    this.loginService.Ingresar(email, contra).subscribe(respuesta => {
      //console.log(respuesta);
      this.loginService.guardarToken(respuesta);
      this.router.navigate(['/tienda']);
    }, errores => this.errores = parsearErroresAPI(errores));

    //this.loginService.Ingresar(email, contra).subscribe(data => console.log(data));

    //this.loginService.Ingresar(email, contra).subscribe(data => (this.loginRP = data));


    //console.log("Esto es email: " + email + ", esto la contraseña: " + contra);

    //if (this.loginRP.token.length > 10) {
      /*this.router.navigate(['tienda']);*/
    //}
        
  }

}
