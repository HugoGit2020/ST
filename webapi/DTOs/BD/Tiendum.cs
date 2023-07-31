using System;
using System.Collections.Generic;

namespace webapi.DTOs.BD;

public partial class Tiendum
{
    public int IdTienda { get; set; }

    public string? Sucursal { get; set; }

    public string? Calle { get; set; }

    public string? Cp { get; set; }

    public string? Colonia { get; set; }

    public string? Ciudad { get; set; }

    public bool? Activo { get; set; }

    public virtual ICollection<Articulo> Articulos { get; set; } = new List<Articulo>();
}
