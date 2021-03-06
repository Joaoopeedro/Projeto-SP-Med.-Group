using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using sp_Medical_group.Web.Api.Interfaces;
using sp_Medical_group.Web.Api.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace sp_Medical_group.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PerfilsController : ControllerBase
    {

        private IUsuarioRepository _usuarioRepository { get; set; }

        public PerfilsController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        [Authorize]
        [HttpPost("imagem/bd")]
        public IActionResult PostBD(IFormFile arquivo)
        {
            try
            {
                if (arquivo.Length > 10000) //10MB
                {
                    return BadRequest(new { mensagem = "O tamanho maximo da imagem foi atingida" });
                }

                string extensao = arquivo.FileName.Split('.').Last();

                if (extensao != "png")
                {
                    return BadRequest(new { mensagem = "Apenas arquivos .png são permitidos" });
                }

                short idUsuario = Convert.ToInt16(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                _usuarioRepository.SalvarPerfilBD(arquivo, idUsuario);

                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [Authorize]
        [HttpGet("imagem/bd")]
        public IActionResult getBd()
        {
            try
            {
                short idUsuario = Convert.ToInt16(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                string base64 = _usuarioRepository.ConsultarPerfilBD(idUsuario);
                return Ok(base64);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
