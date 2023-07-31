export interface articuloCreacionDTO {
  idArticulo: number,
  articulo1: string,
  codigo: string,
  descripcion: string,
  precio: number,
  imagen: string,
  stock: number,
  fkTienda: number
}

export interface articuloDTO {
  idArticulo: number,
  articulo1: string,
  codigo: string,
  descripcion: string,
  precio: number,
  imagen: File,
  stock: number,
  fkTienda: number
}

export interface tiendaMenu {
  idTienda: number,
  sucursal: string
}
