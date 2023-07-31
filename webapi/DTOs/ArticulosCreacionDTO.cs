using System.ComponentModel.DataAnnotations;

namespace webapi.DTOs
{
    public class ArticulosCreacionDTO
    {
        public int IdArticulo { get; set; }
        public string? Articulo1 { get; set; }
        public string? Codigo { get; set; }
        public string? Descripcion { get; set; }
        public double? Precio { get; set; }
        public IFormFile Imagen { get; set; }
        public double? Stock { get; set; }
        public int? FkTienda { get; set; }
    }
}
