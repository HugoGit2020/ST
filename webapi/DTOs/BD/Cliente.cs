using System;
using System.Collections.Generic;

namespace webapi.DTOs.BD;

public partial class Cliente
{
    public int IdCliente { get; set; }

    public string? Nombre { get; set; }

    public string? Apellidos { get; set; }

    public string? Calle { get; set; }

    public string? Cp { get; set; }

    public string? Colonia { get; set; }

    public string? Ciudad { get; set; }

    public string? Correo { get; set; }

    public string? Contrasena { get; set; }

    public bool? Activo { get; set; }

    public virtual ICollection<ClienteArticulo> ClienteArticulos { get; set; } = new List<ClienteArticulo>();
}
