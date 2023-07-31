using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using webapi.DTOs;
using webapi.DTOs.BD;
using webapi.DTOs.Tienda;
using webapi.Modelos;

namespace webapi.Controllers
{
    [Route("api/Ingreso")]
    [ApiController]
    public class IngresoController : ControllerBase
    {
        private readonly ILogger<IngresoController> _logger;
        private readonly UserManager<IdentityUser> userManager;
        private readonly IConfiguration configuration;
        private readonly SignInManager<IdentityUser> signInManager;
        private readonly StContext db;

        public IngresoController(ILogger<IngresoController> logger
            , UserManager<IdentityUser> userManager
            , IConfiguration configuration
            , SignInManager<IdentityUser> signInManager
            , StContext db
            )
        {
            _logger = logger;
            this.userManager = userManager;
            this.configuration = configuration;
            this.signInManager = signInManager;
            this.db = db;
        }

        [HttpPost]
        [HttpPost("/Login")]
        public async Task<ActionResult<RCredenciales>> Ingreso([FromBody] Credenciales cr)
        {

            using (var db = new StContext())
            {
                var u = db.Clientes.Where(m => m.Correo == cr.Correo && m.Contrasena == cr.Contrasena).FirstOrDefault();

                //var resultado = await signInManager.PasswordSignInAsync(cr.Correo, cr.Contrasena, isPersistent: false, lockoutOnFailure: false);

                //if (resultado.Succeeded)
                if (u != null)
                {
                    return await ConstruirToken(cr);
                }
                else
                {
                    return BadRequest("Login Incorrecto");
                }
            }
        }

        //TIENDA H2A 13/07/2023
        [HttpPost("/IngresaTienda")]
        public async Task<ActionResult<string>> IngresaTienda([FromBody] Tiendum td)
        {
            using (var db = new StContext())
            {
                //if(!ModelState.IsValid)
                //{ return BadRequest(ModelState); }

                db.Tienda.Add(td);
                await db.SaveChangesAsync();

                //return CreatedAtRoute("DefaultApi", new { id = td.IdTienda }, td);
                return NoContent();
            }
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<Tiendum>> Get(int Id)
        {
            var Tiendita = await db.Tienda.FirstOrDefaultAsync(x => x.IdTienda == Id);
            if (Tiendita == null) { return NotFound(); }
            return Tiendita;
        }

        //[HttpPut("{id:int}")]
        //public async Task<ActionResult> Put(int Id, Tiendum td)
        //{
        //var Tiendita = await db.Tienda.FirstOrDefaultAsync(x => x.IdTienda == Id);
        //if (Tiendita == null) { return NotFound(); }

        //Tiendita = IActionResultTypeMapper.Map(Tiendum td);
        //await db.SaveChangesAsync();
        //return NoContent();
        //}
        //TIENDA H2A 13/07/2023

        private async Task<RCredenciales> ConstruirToken(Credenciales cr)
        {
            var claims = new List<Claim>()
            {
                new Claim("email", cr.Correo)
            };
            //var usuario = await userManager.FindByEmailAsync(cr.Correo);
            //var claimsDB = await userManager.GetClaimsAsync(usuario);

            //claims.AddRange(claimsDB);

            //var llave = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["llavejwt"]));
            //var creds = new SigningCredentials(llave, SecurityAlgorithms.HmacSha256);

            var expiracion = DateTime.UtcNow.AddDays(1);

            //var token = new JwtSecurityToken(issuer: null, audience: null, claims, expires: expiracion, signingCredentials: creds);

            //return new RCredenciales()
            //{
            //    Token = new JwtSecurityTokenHandler().WriteToken(token),
            //    Expiracion = expiracion
            //};

            return new RCredenciales()
            {
                Token = Guid.NewGuid().ToString(),
                Expiracion = expiracion
            };

        }

    }
}
