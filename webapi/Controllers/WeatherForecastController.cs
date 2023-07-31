using Microsoft.AspNetCore.Mvc;
using webapi.Servicios;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    //H2A Inyección de dependencias 13/07/2023
    private readonly IResIngreso _resIngreso;


    public WeatherForecastController(ILogger<WeatherForecastController> logger, IResIngreso resIngreso)
    {
        _logger = logger;
        _resIngreso = resIngreso;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }

    [HttpGet("Inyeccion")]
    public string ResEjemplo()
    {
        return _resIngreso.Respuesta();
    }


}
