using Microsoft.EntityFrameworkCore;
using sp_Medical_group.Web.Api.Context;
using sp_Medical_group.Web.Api.Domains;
using sp_Medical_group.Web.Api.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sp_Medical_group.Web.Api.Repositories
{

    /// <summary>
    /// Repositorio responsavel pela consulta
    /// </summary>
    public class ConsultaRepository : IConsultaRepository
    {
        /// <summary>
        /// Objeto contexto por onde serão chamados os métodos do EF Core
        /// </summary>
        SpMedicalContext ctx = new();

        public void Cadastrar(Consulta novaConsulta)
        {
            ctx.Consulta.Add(novaConsulta);
            ctx.SaveChanges();
        }

       

        public List<Consulta> ListarMinhasMedico(short idMedico)
        {
            return ctx.Consulta
                .Include(c => c.IdMedicoNavigation)
                //.Include(c => c.IdSituacaoNavigation)
                .Where(c => c.IdMedico == idMedico)
                .ToList();
        }

        public List<Consulta> ListarMinhasPaciente(short idPaciente)
        {
            return ctx.Consulta
                .Include(c => c.IdPacienteNavigation)
                //.Include(c => c.IdSituacaoNavigation)
                .Where(c => c.IdPaciente == idPaciente)
                .ToList();
        }

        public List<Consulta> ListarTodos()
        {
            return ctx.Consulta.ToList();
        }

        public void MudarDescricao(short idConsulta, string descricao)
        {
            Consulta consultaBuscada = ctx.Consulta.FirstOrDefault(c => c.IdConsulta == idConsulta);

            consultaBuscada.Descricao = descricao;
            ctx.Consulta.Update(consultaBuscada);
            ctx.SaveChanges();
        }

        public void MudarSituacao(short idConsulta, short idSituacao)
        {
            Consulta consultaBuscada = ctx.Consulta.FirstOrDefault(c => c.IdConsulta == idConsulta);

            consultaBuscada.IdSituacao = idSituacao;
            ctx.Consulta.Update(consultaBuscada);
            ctx.SaveChanges();


        }
    }
}
