using System.ComponentModel.DataAnnotations;

namespace webapi.DTOs
{
    public class Credenciales
    {
        [EmailAddress]
        [Required]
        public string Correo { get; set; }
        [Required]
        public string Contrasena { get; set; }
    }
}
