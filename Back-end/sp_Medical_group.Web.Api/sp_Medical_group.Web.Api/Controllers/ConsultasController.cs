using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using sp_Medical_group.Web.Api.Domains;
using sp_Medical_group.Web.Api.Interfaces;
using sp_Medical_group.Web.Api.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace sp_Medical_group.Web.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultasController : ControllerBase
    {
        private IConsultaRepository _consultaRepository { get; set; }

        public ConsultasController()
        {
            _consultaRepository = new ConsultaRepository();
        }

        [HttpPost]
        public IActionResult Cadastrar (Consulta novaConsulta)
        {
            _consultaRepository.Cadastrar(novaConsulta);

            return StatusCode(201);
        }

        [HttpGet]
        public IActionResult ListarTodos()
        {
            return Ok(_consultaRepository.ListarTodos());
        }
        
        [HttpGet("Medico/{idMedico}")]
        public IActionResult ConsultaMedico(short idMedico)
        {

            try
            {
                
                return Ok(_consultaRepository.ListarMinhasMedico(idMedico));
            }
            catch (Exception erro)
            {

                return BadRequest(new
                {
                    mensagem = "Nao foi possivel ver suas consultas",
                    erro
                });
            }
            
        }

        [HttpGet("Paciente/{idPaciente}")]
        public IActionResult ConsultaPaciente(short idPaciente)
        {

            try
            {

                return Ok(_consultaRepository.ListarMinhasPaciente(idPaciente));
            }
            catch (Exception erro)
            {

                return BadRequest(new
                {
                    mensagem = "Nao foi possivel ver suas consultas",
                    erro
                });
            }
            
        }

        
        
        
    }
}
