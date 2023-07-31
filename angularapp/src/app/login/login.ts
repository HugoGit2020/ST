export interface loginRequestDTO {
  correo: string,
  contrasena: string 
}

export interface loginResponseDTO {
  token: string,
  expiracion: Date
}

