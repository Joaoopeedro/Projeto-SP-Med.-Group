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

        public void Atualizar(short idConsulta, Consulta consultaAtualizada)
        {
            Consulta consultaBuscada = ctx.Consulta.Find(idConsulta);

            if (consultaAtualizada.IdPaciente > 0||consultaAtualizada.IdMedico > 0|| consultaAtualizada.DataConsulta > DateTime.Now)
            {
                consultaBuscada.IdPaciente = consultaAtualizada.IdPaciente;
                consultaBuscada.IdMedico = consultaAtualizada.IdMedico;
                consultaBuscada.DataConsulta = consultaAtualizada.DataConsulta;

                ctx.Consulta.Update(consultaBuscada);
                ctx.SaveChanges();
            }
        }

        public Consulta BuscarConsulta(short idConsulta)
        {
            return ctx.Consulta.FirstOrDefault(c => c.IdConsulta == idConsulta);
        }

        public void Cadastrar(Consulta novaConsulta)
        {

            novaConsulta.Descricao = "sem descrição definida";
            novaConsulta.IdSituacao = 3;
            ctx.Consulta.Add(novaConsulta);
            ctx.SaveChanges();
        }

        public void Deletar(short idConsulta)
        {
            ctx.Consulta.Remove(BuscarConsulta(idConsulta));
            ctx.SaveChanges();
        }

        public List<Consulta> ListarMinhasMedico(short idMedico)
        {
            return ctx.Consulta
                .Include(c => c.IdMedicoNavigation.IdUsuarioNavigation)
                //.Include(c => c.IdSituacaoNavigation)
                .Where(c => c.IdMedicoNavigation.IdUsuarioNavigation.IdUsuario == idMedico)
                .ToList();
        }

        public List<Consulta> ListarMinhasPaciente(short idPaciente)
        {
            return ctx.Consulta
                .Include(c => c.IdPacienteNavigation.IdUsuarioNavigation)
                //.Include(c => c.IdSituacaoNavigation)
                .Where(c => c.IdPacienteNavigation.IdUsuarioNavigation.IdUsuario == idPaciente)
                .ToList();
        }

        public List<Consulta> ListarTodos()
        {
            return ctx.Consulta
                .Select(u => new Consulta()
                {
                    IdConsulta = u.IdConsulta,
                    IdPaciente = u.IdPaciente,
                    IdMedico = u.IdMedico,
                    IdSituacao = u.IdSituacao,
                    DataConsulta = u.DataConsulta,
                    Descricao = u.Descricao,

                    IdMedicoNavigation = new Medico()
                    {
                        NomeMedico = u.IdMedicoNavigation.NomeMedico,
                        Crm = u.IdMedicoNavigation.Crm,
                        IdEspecializacaoNavigation = new Especializacao()
                        {
                            TipoEspecializacao = u.IdMedicoNavigation.IdEspecializacaoNavigation.TipoEspecializacao,

                        }
                    },
                    IdPacienteNavigation = new Paciente()
                    {
                        NomePaciente = u.IdPacienteNavigation.NomePaciente,
                        Cpf = u.IdPacienteNavigation.Cpf,
                        DataNascimento = u.IdPacienteNavigation.DataNascimento,
                        Telefone = u.IdPacienteNavigation.Telefone,
                        IdadePaciente = u.IdPacienteNavigation.IdadePaciente,
                        Rg = u.IdPacienteNavigation.Rg
                    }
                })
                .ToList();
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
