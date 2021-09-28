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
    /// Repositorio responsavel pelo medico
    /// </summary>
    public class MedicoRepository : IMedicoRepository
    {
        SpMedicalContext ctx = new();

        public void Atualizar(short id, Medico medicoAtualizado)
        {
            Medico medicoBuscado = ctx.Medicos.Find(id);

            if (medicoBuscado != null)
            {
                medicoBuscado.IdMedico = medicoBuscado.IdMedico;
                medicoBuscado.IdUsuario = medicoBuscado.IdUsuario;
                medicoBuscado.IdClinica = medicoAtualizado.IdClinica;
                medicoBuscado.NomeMedico = medicoAtualizado.NomeMedico;
                medicoBuscado.IdEspecializacao = medicoAtualizado.IdEspecializacao;
                medicoBuscado.Crm = medicoAtualizado.Crm;
                

                ctx.Medicos.Update(medicoBuscado);
                ctx.SaveChanges();
            }
        }

        public Medico BuscarPorId(short idMedico)
        {
            return ctx.Medicos
                .Select(p => new Medico()
                {
                    IdMedico = p.IdMedico,
                    NomeMedico = p.NomeMedico,
                    Crm = p.Crm,
                    IdClinicaNavigation = new Clinica()
                    {
                        NomeFantasia = p.IdClinicaNavigation.NomeFantasia,
                        Cnpj = p.IdClinicaNavigation.Cnpj,
                        Endereco = p.IdClinicaNavigation.Endereco,
                        RazaoSocial = p.IdClinicaNavigation.RazaoSocial
                    },
                    IdEspecializacaoNavigation = new Especializacao()
                    {
                        TipoEspecializacao = p.IdEspecializacaoNavigation.TipoEspecializacao
                    },

                    Consulta = ctx.Consulta.Where(c => c.IdMedico == p.IdMedico).ToList()
                })
                .FirstOrDefault(p => p.IdMedico == idMedico);
        }

        public void Cadastrar(Medico novoMedico)
        {
            ctx.Medicos.Add(novoMedico);
            ctx.SaveChanges();
        }

        public void Deletar(short idMedico)
        {
            Medico medicoDeletado = ctx.Medicos.FirstOrDefault(m => m.IdMedico == idMedico);
            ctx.Medicos.Remove(medicoDeletado);
            ctx.SaveChanges();
        }

        public List<Medico> ListarTodos()
        {
            return ctx.Medicos
               .Select(p => new Medico()
               {
                   IdMedico = p.IdMedico,
                   NomeMedico = p.NomeMedico,
                   Crm = p.Crm,
                   IdClinicaNavigation = new Clinica()
                   {
                       NomeFantasia = p.IdClinicaNavigation.NomeFantasia,
                       Cnpj = p.IdClinicaNavigation.Cnpj,
                       Endereco = p.IdClinicaNavigation.Endereco,
                       RazaoSocial = p.IdClinicaNavigation.RazaoSocial 
                   },
                   IdEspecializacaoNavigation = new Especializacao()
                   {
                       TipoEspecializacao = p.IdEspecializacaoNavigation.TipoEspecializacao
                   },

                   Consulta = ctx.Consulta.Where(c => c.IdMedico == p.IdMedico).ToList()
               })
               .ToList();
        }
    }
}
