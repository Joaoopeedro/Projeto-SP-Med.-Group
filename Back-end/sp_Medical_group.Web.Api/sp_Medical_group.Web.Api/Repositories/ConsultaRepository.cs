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

        public void Atualizar(short idConsulta, Consultum consultaAtualizada)
        {
            Consultum consultaBuscada = ctx.Consulta.Find(idConsulta);

            if (consultaAtualizada.IdPaciente > 0||consultaAtualizada.IdMedico > 0|| consultaAtualizada.DataConsulta > DateTime.Now)
            {
                consultaBuscada.IdPaciente = consultaAtualizada.IdPaciente;
                consultaBuscada.IdMedico = consultaAtualizada.IdMedico;
                consultaBuscada.DataConsulta = consultaAtualizada.DataConsulta;

                ctx.Consulta.Update(consultaBuscada);
                ctx.SaveChanges();
            }
        }

        public Consultum BuscarConsulta(short idConsulta)
        {
            return ctx.Consulta.FirstOrDefault(c => c.IdConsulta == idConsulta);
        }

        public void Cadastrar(Consultum novaConsulta)
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

        public List<Consultum> ListarMinhas(short id, short idTipo)
        {
            switch (idTipo)
            {
                case 3:
                    Medico medico = ctx.Medicos.FirstOrDefault(m => m.IdUsuario == id);
                    short idMedico = medico.IdMedico;
                    return ctx.Consulta
                        .Select(c => new Consultum() {
                            IdConsulta = c.IdConsulta,
                            DataConsulta = c.DataConsulta,
                            IdSituacao = c.IdSituacao,
                            IdMedico = c.IdMedico,
                            Descricao = c.Descricao,
                            IdPacienteNavigation = new Paciente()
                            {
                                NomePaciente = c.IdPacienteNavigation.NomePaciente,
                                IdadePaciente = c.IdPacienteNavigation.IdadePaciente,
                                Telefone = c.IdPacienteNavigation.Telefone,
                                Endereco = c.IdPacienteNavigation.Endereco,
                                DataNascimento = c.IdPacienteNavigation.DataNascimento,
                                Cpf = c.IdPacienteNavigation.Cpf,
                                Rg = c.IdPacienteNavigation.Rg

                            }

                        })
                        .Where(c => c.IdMedico == idMedico).ToList();
                    

                case 2:
                    Paciente paciente = ctx.Pacientes.FirstOrDefault(p => p.IdPaciente == id);
                    short idPaciente = paciente.IdPaciente;
                    return ctx.Consulta
                        .Select(c => new Consultum()
                        {
                            IdConsulta = c.IdConsulta,
                            DataConsulta = c.DataConsulta,
                            IdSituacao = c.IdSituacao,
                            IdMedico = c.IdMedico,
                            Descricao = c.Descricao,
                            IdMedicoNavigation = new Medico()
                            {
                                NomeMedico = c.IdMedicoNavigation.NomeMedico,
                                Crm = c.IdMedicoNavigation.Crm,
                                IdEspecializacao = c.IdMedicoNavigation.IdEspecializacao


                            }
                            

                        })
                        .Where(c => c.IdPaciente == idPaciente).ToList();
                   
                default:
                    return null;
                    
            }
        }

      

        public List<Consultum> ListarTodos()
        {
            return ctx.Consulta
                .Select(u => new Consultum()
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
            Consultum consultaBuscada = ctx.Consulta.FirstOrDefault(c => c.IdConsulta == idConsulta);

            consultaBuscada.Descricao = descricao;
            ctx.Consulta.Update(consultaBuscada);
            ctx.SaveChanges();
        }

        public void MudarSituacao(short idConsulta, short idSituacao)
        {
            Consultum consultaBuscada = ctx.Consulta.FirstOrDefault(c => c.IdConsulta == idConsulta);

            consultaBuscada.IdSituacao = idSituacao;
            ctx.Consulta.Update(consultaBuscada);
            ctx.SaveChanges();


        }
    }
}
