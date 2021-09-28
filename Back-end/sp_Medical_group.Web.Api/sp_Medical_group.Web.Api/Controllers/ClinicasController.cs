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
    public class ClinicasController : ControllerBase
    {
        private IClinicaRepository _clinicaRepository { get; set; }

        public ClinicasController()
        {
            _clinicaRepository = new ClinicaRepository();
        }

        /// <summary>
        /// Cadastra uma nova clinica
        /// </summary>
        /// <param name="novaClinica">Dados da nova clinica</param>
        /// <returns>Uma Clinica cadastrada</returns>
        [Authorize(Roles = "1")]
        [HttpPost]
        public IActionResult Cadastrar(Clinica novaClinica)
        {
            _clinicaRepository.Cadastrar(novaClinica);

            return StatusCode(201);
        }

        /// <summary>
        /// Deletar uma clinica
        /// </summary>
        /// <param name="idClinica">ID da clinica deletada</param>
        /// <returns>Clinica deletada</returns>
        [Authorize(Roles = "1")]
        [HttpDelete("deletar/{idClinica}")]
        public IActionResult Deletar(short idClinica)
        {
            _clinicaRepository.Deletar(idClinica);

            return Ok();
        }
    }
}
