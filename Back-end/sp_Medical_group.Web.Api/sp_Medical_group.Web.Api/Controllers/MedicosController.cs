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
    public class MedicosController : ControllerBase
    {
        private IMedicoRepository _medicoRepository { get; set; }

        private IUsuarioRepository _usuarioRepository { get; set; }

        public MedicosController()
        {
            _medicoRepository = new MedicoRepository();
            _usuarioRepository = new UsuarioRepository();
        }


        /// <summary>
        /// Lista todos os medicos existentes
        /// </summary>
        /// <returns>Uma lista de medicos </returns>
        [HttpGet]
        public IActionResult ListarTodos()
        {
            try
            {
                return Ok(_medicoRepository.ListarTodos());

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Busca um medico pelo seu ID
        /// </summary>
        /// <param name="id">Id do medico a ser buscado</param>
        /// <returns>Um medico buscado</returns>
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(short id)
        {
            if (_medicoRepository.BuscarPorId(id) == null)
            {
                return BadRequest(new
                {
                    mensagem = "Id do meico nao existente!"
                });
            }
            return Ok(_medicoRepository.BuscarPorId(id));

        }

        /// <summary>
        /// Atualizada os dados de um determinado medico
        /// </summary>
        /// <param name="id">ID do medico a ser atualizado</param>
        /// <param name="medicoAtualizado">Objeto do medico atualizado</param>
        /// <returns>Um medico atualizado</returns>
        [HttpPut("{id}")]
        public IActionResult Atualizar(short id, Medico medicoAtualizado)
        {
            try
            {
                _medicoRepository.Atualizar(Convert.ToInt16(id), medicoAtualizado);
                return StatusCode(200, new
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
        /// Deletar um determinado medico pelo seu ID
        /// </summary>
        /// <param name="id">ID do medico a ser deletado</param>
        /// <returns>Um medico deletado</returns>
        [HttpDelete("deletar/{id}")]
        public IActionResult Deletar(short id)
        {
            if (_medicoRepository.BuscarPorId(id) == null)
            {
                return BadRequest(new
                {
                    mensagem = "Esse id nao existe!"
                });
            }
            _medicoRepository.Deletar(id);

            return StatusCode(204);
        }

        /// <summary>
        /// Cadastrar um medico
        /// </summary>
        /// <param name="novoMedico">Objeto do medico a ser cadastrado</param>
        /// <returns>Um paciente cadastrado</returns>
        [HttpPost]
        public IActionResult Cadastrar(Medico novoMedico)
        {
            try
            {
                if (_medicoRepository.BuscarPorId(Convert.ToInt16(novoMedico.IdUsuario)) != null )
                {
                    return BadRequest(new
                    {
                        mensagem = "ja existe um medico com esse id"
                    });
                }
                if (novoMedico.NomeMedico == null || novoMedico.IdEspecializacao == null || novoMedico.Crm == null || novoMedico.IdClinica == null)
                {
                    return BadRequest(new
                    {
                        mensagem = "Algum dado nao foi informado ou nao foi infomado corretamente"
                    });
                }
                _medicoRepository.Cadastrar(novoMedico);
                return StatusCode(201);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }
    }
}
