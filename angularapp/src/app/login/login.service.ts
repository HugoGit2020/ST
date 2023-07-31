import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginRequestDTO, loginResponseDTO } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private apiURL = "https://localhost:44333/";
  private apiLogin = this.apiURL + "Login";
  private readonly llaveToken = 'token';
  private readonly llaveExpiracion = 'token-expiracion';

  loginRequest!: loginRequestDTO[];

  public Ingresar(email: string, contra: string): Observable<loginResponseDTO> {
    const reque = { correo: email, contrasena: contra };

    var Res = this.http.post<loginResponseDTO>(this.apiLogin, reque);    
    return Res; 
  }

  guardarToken(loginResponseDTO: loginResponseDTO) {
    localStorage.setItem(this.llaveToken, loginResponseDTO.token);
    localStorage.setItem(this.llaveExpiracion, loginResponseDTO.expiracion.toString());
  }

}
