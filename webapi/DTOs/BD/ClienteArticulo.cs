using System;
using System.Collections.Generic;

namespace webapi.DTOs.BD;

public partial class ClienteArticulo
{
    public int IdClienteArticulo { get; set; }

    public int? FkCliente { get; set; }

    public int? FkArticulo { get; set; }

    public DateTime? Fecha { get; set; }

    public bool? Activo { get; set; }

    public virtual Articulo? FkArticuloNavigation { get; set; }

    public virtual Cliente? FkClienteNavigation { get; set; }
}
