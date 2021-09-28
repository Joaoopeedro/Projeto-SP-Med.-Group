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
    /// Repositorio responsavel pelo paciente
    /// </summary>
    public class PacienteRepository : IPacienteRepository
    {
        SpMedicalContext ctx = new();

     

        public void Atualizar(short id, Paciente pacienteAtualizado)
        {
            Paciente pacienteBuscado = ctx.Pacientes.Find(id);

            if (pacienteBuscado != null)
            {
                pacienteBuscado.IdUsuario = pacienteBuscado.IdUsuario;
                pacienteBuscado.IdadePaciente = pacienteAtualizado.IdadePaciente;
                pacienteBuscado.NomePaciente = pacienteAtualizado.NomePaciente;
                pacienteBuscado.Telefone = pacienteAtualizado.Telefone;
                pacienteBuscado.Cpf = pacienteBuscado.Cpf;
                pacienteBuscado.DataNascimento = pacienteBuscado.DataNascimento;
                pacienteBuscado.Endereco = pacienteAtualizado.Endereco;
                pacienteBuscado.Rg = pacienteBuscado.Rg;

                ctx.Pacientes.Update(pacienteBuscado);
                ctx.SaveChanges();
            }
            

        }

        public Paciente BuscarPorId(short id)
        {
            return ctx.Pacientes.FirstOrDefault(p => p.IdPaciente == id);
        }

        public void Cadastrar(Paciente novoPaciente)
        {
            ctx.Pacientes.Add(novoPaciente);
            ctx.SaveChanges();
        }

        public void Deletar(short id)
        {
            ctx.Pacientes.Remove(BuscarPorId(id));
            ctx.SaveChanges();
        }

        public List<Paciente> ListarTodos()
        {
            return ctx.Pacientes
                .Select(p => new Paciente()
                {
                    IdPaciente = p.IdPaciente,
                    IdUsuario = p.IdUsuario,
                    IdadePaciente = p.IdadePaciente,
                    NomePaciente = p.NomePaciente,
                    Telefone = p.Telefone,
                    Cpf = p.Cpf,
                    DataNascimento = p.DataNascimento,
                    Endereco = p.Endereco,
                    Rg = p.Rg,
                    IdUsuarioNavigation = new Usuario()
                    {
                        Email = p.IdUsuarioNavigation.Email
                    },
                    Consulta = ctx.Consulta.Where(c => c.IdPaciente == p.IdPaciente).ToList()

                }) 
                .ToList();
        }
    }
}
