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

        public void Atualizar(Paciente pacienteAtualizado)
        {
            throw new NotImplementedException();
        }

        public Paciente BuscarPorId(short id)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Paciente novoPaciente)
        {
            throw new NotImplementedException();
        }

        public void Deletar(short id)
        {
            throw new NotImplementedException();
        }

        public List<Paciente> ListarTodos()
        {
            throw new NotImplementedException();
        }
    }
}
