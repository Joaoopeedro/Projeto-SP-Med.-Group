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
    public class LocalizacoesController : ControllerBase
    {
        private ILocalizacaoRepository _localizacaoRepository { get; set; }

        public LocalizacoesController()
        {
            _localizacaoRepository = new LocalizacaoRepository();
        }

        [HttpGet]
        public IActionResult ListarTodos()
        {
            try
            {
                return Ok(_localizacaoRepository.ListarTodas());
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        [HttpPost]
        public IActionResult Cadastrar(Localizacao novaLocalizacao)
        {
            try
            {
                _localizacaoRepository.Cadastrar(novaLocalizacao);
                return StatusCode(201);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

    }
}
