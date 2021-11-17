using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using sp_Medical_group.Web.Api.Context;
using sp_Medical_group.Web.Api.Domains;
using sp_Medical_group.Web.Api.Interfaces;
using sp_Medical_group.Web.Api.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace sp_Medical_group.Web.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultasController : ControllerBase
    {
        private IConsultaRepository _consultaRepository { get; set; }
        private IMedicoRepository _medicoRepository { get; set; }

        public ConsultasController()
        {
            _consultaRepository = new ConsultaRepository();
            _medicoRepository = new MedicoRepository();
        }

        /// <summary>
        /// Cadastrar uma nova consulta
        /// </summary>
        /// <param name="novaConsulta">Dados da noca consulta da nova consulta cadastrada</param>
        /// <returns>Consulta cadastrada</returns>
        [Authorize(Roles = "1")]
        [HttpPost]
        public IActionResult Cadastrar(Consultum novaConsulta)
        {
            try
            {
                if (novaConsulta.IdPaciente <= 0 || novaConsulta.IdMedico <= 0 || novaConsulta.Descricao == null || novaConsulta.IdSituacao <= 0 && novaConsulta.IdSituacao > 3 || novaConsulta.DataConsulta < DateTime.Now)
                {
                    return BadRequest(new
                    {
                        mensagem = "Algum dado nao foi informado ou nao foi infomado corretamente"
                    });
                }
                _consultaRepository.Cadastrar(novaConsulta);

                return StatusCode(201);

            }
            catch (Exception erro)
            {
                return BadRequest(erro);

            }
        }

        /// <summary>
        /// Lista todas as consultas
        /// </summary>
        /// <returns>Uma lista de consultas</returns>
        [Authorize(Roles ="1")]
        [HttpGet]
        public IActionResult ListarTodos()
        {
            return Ok(_consultaRepository.ListarTodos());
        }

        /// <summary>
        /// Lita as consultas o medico
        /// </summary>
        /// <returns>Uma lista de um determinado medico</returns>
        [Authorize(Roles = "3,2")]
        [HttpGet("Consulta")]
        public IActionResult ListarMinhas()
        {

            try
            {
                short id = Convert.ToInt16(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                short idTipo = Convert.ToInt16(HttpContext.User.Claims.First(c => c.Type == ClaimTypes.Role).Value);
                List<Consultum> listaConsulta = _consultaRepository.ListarMinhas(id,idTipo);

                if (listaConsulta.Count == 0)
                {
                    return BadRequest(new
                    {
                        Mensagem = "Não há nenhuma consulta do medico informado"
                    });
                }


                return Ok(listaConsulta);
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

       

        /// <summary>
        /// Muda a descricao de uma determinada consulta
        /// </summary>
        /// <param name="idConsulta">ID da consulta atualizada</param>
        /// <param name="novaDescricao">Nova descricao da consulta</param>
        /// <returns>Uma nova descricao de uma determinaa consulta</returns>
        [Authorize(Roles = "3")]
        [HttpPatch("Descricao/{idConsulta}")]
        public IActionResult MudarDescricao(short idConsulta, Consultum novaDescricao)
        {
            try
            {
                Consultum consultaBuscada = _consultaRepository.BuscarConsulta(idConsulta);

                short idUsuario = Convert.ToInt16(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                SpMedicalContext ctx = new SpMedicalContext();
                Medico medicoBuscado = ctx.Medicos.FirstOrDefault(m => m.IdUsuario == idUsuario);

                if (medicoBuscado.IdMedico != consultaBuscada.IdMedico)
                {
                    return BadRequest(new
                    {
                        mensagem = "So o medico dessa consulta pode alterar a desricao"
                        //mensagem = "Somente médicos logados podem alterar a descrição da consulta"
                    });
                }
                if (idConsulta <= 0)
                {

                    return BadRequest(new
                    {
                        Mensagem = "Este Id esta invalido"
                    });
                }

                if (novaDescricao.Descricao == null)
                {

                    return BadRequest(new
                    {
                        Mensagem = "Por favor Informar a descricao"
                    });
                }

                _consultaRepository.MudarDescricao(idConsulta, novaDescricao.Descricao);

                return Ok();
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Muda a situacao de uma determinada consulta
        /// </summary>
        /// <param name="id">ID da consulta atualizada</param>
        /// <param name="novaSituacao">Nova situacao da consulta</param>
        /// <returns>Uma consulta com uma nova situacao</returns>
        [Authorize(Roles = "1")]
        [HttpPatch("Situacao/{id}")]
        public IActionResult MudarSituacao(short id, Consultum novaSituacao)
        {
            try
            {
                if (id <= 0)
                {

                    return BadRequest(new
                    {
                        Mensagem = "Este Id esta invalido"
                    });
                }

                if (novaSituacao.IdSituacao <= 0)
                {

                    return BadRequest(new
                    {
                        Mensagem = "Informe um ID valido"
                    });
                }
                _consultaRepository.MudarSituacao(id, Convert.ToInt16(novaSituacao.IdSituacao));
                return Ok();
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Deleta uma consulta
        /// </summary>
        /// <param name="id">ID da consulta deletada</param>
        /// <returns>Uma consulta deletada</returns>
        [Authorize(Roles = "1")]
        [HttpDelete("deletar/{id}")]
        public IActionResult Deletar(short id)
        {
            
            if (_consultaRepository.BuscarConsulta(id)==null)
            {
                return BadRequest(new
                {
                    mensagem = "Esse id nao existe!"
                });
            }
            _consultaRepository.Deletar(id);

            return StatusCode(204);
        }

        /// <summary>
        /// Atualiza os dados de uma determianda consulta
        /// </summary>
        /// <param name="id">ID da consulta atualizada</param>
        /// <param name="consultaAtualizada">Dados da consulta ataulizada</param>
        /// <returns>Uma consulta com os dados atualizados</returns>
        [Authorize(Roles = "1")]
        [HttpPut("{id}")]
        public IActionResult Atualizar(short id, Consultum consultaAtualizada)
        {
            _consultaRepository.Atualizar(Convert.ToInt16(id), consultaAtualizada);

            return StatusCode(204);
        }

        /// <summary>
        /// Busca uma determinada consulta pelo seu id
        /// </summary>
        /// <param name="id">ID da consulta buscada</param>
        /// <returns>A consulta buscada</returns>
        [Authorize]
        [HttpGet("{id}")]
        public IActionResult Buscar(short id)
        {

            if (_consultaRepository.BuscarConsulta(id) == null)
            {
                return BadRequest(new
                {
                    mensagem = "Consulta desse id nao existe!"
                });
            }
            

            return Ok(_consultaRepository.BuscarConsulta(id));
        }







    }
}
