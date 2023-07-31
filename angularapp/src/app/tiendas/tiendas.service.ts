import { Injectable } from '@angular/core';
import { tiendaCreacionDTO, tiendaCreacionDTO2, tiendaDTO } from './tienda';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendasService {
  constructor(private http: HttpClient) { }

  private apiURL = "https://localhost:44333/api/";
  private apiTiendas = this.apiURL + 'Tiendums';

  public obtenerPaginado(pagina: number, cantidadRegistrosAMostrar: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<tiendaDTO[]>(this.apiURL, { observe: 'response', params });
  }

  public obtenerTodos(): Observable<tiendaDTO[]> {
      //return [{ idTienda: 1, sucursal: 'Tienda 1', calle: 'Calle 1', cp:'040000', colonia: 'Colonia 1', ciudad:'Ciudad 1', activo:true }];
    return this.http.get<tiendaDTO[]>(this.apiTiendas);
  }

  public obtenerPorId(id: number): Observable<tiendaDTO> {
    return this.http.get<tiendaDTO>(`${this.apiTiendas}/${id}`);
  }

  public crear(tienda: tiendaCreacionDTO) {
    return this.http.post(this.apiTiendas, tienda);
  }

  public editar(id: number, tienda: tiendaCreacionDTO) {
    return this.http.put(`${this.apiTiendas}/${id}`, tienda);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiTiendas}/${id}`);
  }
}


