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
    public class PacientesController : ControllerBase
    {
        private IPacienteRepository _pacienteRepository { get; set; }

        public PacientesController()
        {
            _pacienteRepository = new PacienteRepository();

        }

        /// <summary>
        /// Listar todos os pacientes
        /// </summary>
        /// <returns>Uma lista de pacientes</returns>
        [HttpGet]
        public IActionResult ListarTodos()
        {
            try
            {
                return Ok(_pacienteRepository.ListarTodos());

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Busca um paciente pelo seu ID
        /// </summary>
        /// <param name="id">Id do paciente a ser buscado</param>
        /// <returns>Um paciente pelo seu id</returns>
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(short id)
        {
            if (_pacienteRepository.BuscarPorId(id) == null)
            {
                return BadRequest(new
                {
                    mensagem = "Id do paciente nao existente!"
                });
            }
            return Ok(_pacienteRepository.BuscarPorId(id));

        }

        /// <summary>
        /// Atualiza os dados de um determinado paciente
        /// </summary>
        /// <param name="id">ID do paciente a ser atualizado</param>
        /// <param name="pacienteAtualizado">Objeto do paciente atualizado</param>
        /// <returns>Um paciente com seus dados atualizados</returns>
        [HttpPut("{id}")]
        public IActionResult Atualizar(short id,Paciente pacienteAtualizado)
        {
            try
            {
                _pacienteRepository.Atualizar(Convert.ToInt16(id), pacienteAtualizado);
                return StatusCode(200,new
                {
                    mensagem = "Dados atualizados!"
                });
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Deleta um determinado paciente pelo seu ID
        /// </summary>
        /// <param name="id">Id do paciente que sera deletado</param>
        /// <returns>Um paciente deletado</returns>
        [HttpDelete("deletar/{id}")]
        public IActionResult Deletar(short id)
        {
            if (_pacienteRepository.BuscarPorId(id) == null)
            {
                return BadRequest(new
                {
                    mensagem = "Esse id nao existe!"
                });
            }
            _pacienteRepository.Deletar(id);

            return StatusCode(204);
        }

        /// <summary>
        /// Cadastra um novo paciente
        /// </summary>
        /// <param name="novoPaciente">Objeto do usuario a ser cadastrado</param>
        /// <returns>Um usuario cadastrado</returns>
        [HttpPost]
        public IActionResult Cadastrar(Paciente novoPaciente)
        {
            try
            {
                if (_pacienteRepository.BuscarPorId(Convert.ToInt16(novoPaciente.IdUsuario)) != null)
                {
                    return BadRequest(new
                    {
                        mensagem = "ja existe um paciente com esse id"
                    });
                }
                if ( novoPaciente.NomePaciente == null|| novoPaciente.Telefone == null||novoPaciente.Endereco == null)
                {
                    return BadRequest(new
                    {
                        mensagem = "Algum dado nao foi informado ou nao foi infomado corretamente"
                    });
                }
                _pacienteRepository.Cadastrar(novoPaciente);
                return StatusCode(201);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }
    }
}
