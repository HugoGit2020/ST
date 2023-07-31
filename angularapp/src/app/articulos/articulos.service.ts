import { Injectable } from '@angular/core';
import { articuloCreacionDTO, articuloDTO, tiendaMenu } from './articulo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }

  private apiURL = "https://localhost:44333/api/";
  private apiArticulos = this.apiURL + 'Articuloes';
  private apiTiendas = this.apiURL + 'Tiendums';

  public obtenerMenuT(): Observable<tiendaMenu[]> {
    return this.http.get<tiendaMenu[]>(this.apiTiendas);
  }

  public obtenerTodos(): Observable<articuloDTO[]> {
    return this.http.get<articuloDTO[]>(this.apiArticulos);
  }

  public obtenerPorId(id: number): Observable<articuloDTO> {
    return this.http.get<articuloDTO>(`${this.apiArticulos}/${id}`);
  }

  public crear(articulo: articuloCreacionDTO) {
    const formData = this.construirFormData(articulo);
    //return this.http.post(this.apiArticulos, articulo);
    return this.http.post(this.apiArticulos, formData);
  }

  //H2A 26/07/2023 lo nuevo
  private construirFormData(articulo: articuloCreacionDTO): FormData {
    const formData = new FormData();

    formData.append('idArticulo', articulo.idArticulo.toString());
    formData.append('articulo1', articulo.articulo1);
    formData.append('codigo', articulo.codigo);
    formData.append('descripcion', articulo.descripcion);
    formData.append('precio', articulo.precio.toString());

    if (articulo.imagen) { formData.append('imagen', articulo.imagen); }

    formData.append('stock', articulo.stock.toString());
    formData.append('fkTienda', articulo.fkTienda.toString());

    return formData;
  }


  public editar(id: number, articulo: articuloCreacionDTO) {
    return this.http.put(`${this.apiArticulos}/${id}`, articulo);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiArticulos}/${id}`);
  }

}
