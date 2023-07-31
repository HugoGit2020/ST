using System;
using System.Collections.Generic;

namespace webapi.DTOs.BD;

public partial class ArticuloTiendum
{
    public int IdArticuloTienda { get; set; }

    public int? FkArticulo { get; set; }

    public int? FkTienda { get; set; }

    public DateTime? Fecha { get; set; }

    public bool? Activo { get; set; }
}
