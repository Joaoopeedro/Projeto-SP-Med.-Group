using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using sp_Medical_group.Web.Api.Domains;
using sp_Medical_group.Web.Api.Interfaces;
using sp_Medical_group.Web.Api.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sp_Medical_group.Web.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private IUsuarioRepository _usuarioRepository { get; set; }

        public UsuariosController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        /// <summary>
        /// Cadastra um novo usuario
        /// </summary>
        /// <param name="novoUsuario">Dados do usuario cadastrado</param>
        /// <returns>Um novo usuario cadastrado</returns>
        [Authorize(Roles = "1")]
        [HttpPost]
        public IActionResult Cadastrar(Usuario novoUsuario)
        {
            _usuarioRepository.Cadastrar(novoUsuario);

            return StatusCode(201);
        }

        /// <summary>
        /// Deleta um usuario existente
        /// </summary>
        /// <param name="idUsuario">ID do usuario a ser deletado</param>
        /// <returns>Um usuario deletado</returns>
        [Authorize(Roles = "1")]
        [HttpDelete("deletar/{idUsuario}")]
        public IActionResult Deletar(short idUsuario)
        {
            try
            {
                _usuarioRepository.Deletar(idUsuario);

                return Ok();

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
               
            }
        }
    }
}
