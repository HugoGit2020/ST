using System;
using System.Collections.Generic;

namespace webapi.DTOs.BD;

public partial class Articulo
{
    public int IdArticulo { get; set; }

    public string? Articulo1 { get; set; }

    public string? Codigo { get; set; }

    public string? Descripcion { get; set; }

    public double? Precio { get; set; }

    public string? Imagen { get; set; }

    public double? Stock { get; set; }

    public int? FkTienda { get; set; }

    public DateTime? FecIng { get; set; }

    public virtual ICollection<ClienteArticulo> ClienteArticulos { get; set; } = new List<ClienteArticulo>();

    public virtual Tiendum? FkTiendaNavigation { get; set; }
}
