using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Configuration;
using System.Text;
using webapi.DTOs.BD;
using webapi.Servicios;
using webapi.Controllers;
using webapi.Utilidades;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//H2A Habilitar Angular 18/07/2023
//var frontendURL = Configuration.GetValue<string>("");

//H2A 26/07/2023 Configuración de archivos
builder.Services.AddTransient<IAlmacenadorArchivos, AlmacenadorArchivosLocal>();
builder.Services.AddHttpContextAccessor();
//H2A 26/07/2023 Configuración de archivos


builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("https://localhost:4200").AllowAnyMethod().AllowAnyHeader();
    });
});
//H2A Habilitar Angular 18/07/2023


//H2A Habilitar Angular 18/07/2023

//H2A Inyeccion de dependencias 13/07/2023

//builder.Services.AddDbContext<StContext>(options =>
//            options.UseSqlServer(Configuration.GetConnectionString("defaultConnection"),
//            sqlServer => sqlServer.UseNetTopologySuite()));

builder.Services.AddScoped<IResIngreso, ResIngreso>();
builder.Services.AddDbContext<StContext>();
builder.Services.AddIdentity<IdentityUser, IdentityRole>().AddEntityFrameworkStores<StContext>().AddDefaultTokenProviders();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(opciones =>
                opciones.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes("LKMFLKM43LKM543JKN3KJ4SAD543423215SA4DA5S3423KJ4KJNSDKJASNDJAKSDJKN")),
                    ClockSkew = TimeSpan.Zero
                });
builder.Services.AddAuthorization(opciones =>
{
    opciones.AddPolicy("EsAdmin", policy => policy.RequireClaim("role", "admin"));
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

//H2A Habilitar Angular 18/07/2023
app.UseCors();
//H2A para configurar imagenes
app.UseStaticFiles();

//app.MapArticuloEndpoints();
//H2A Habilitar Angular 18/07/2023

app.Run();
