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

        public void Atualizar(Medico medicoAtualizado)
        {
            throw new NotImplementedException();
        }

        public Medico BuscarPorId(short idMedico)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Medico novoMedico)
        {
            throw new NotImplementedException();
        }

        public void Deletar(short idMedico)
        {
            throw new NotImplementedException();
        }

        public List<Medico> ListarTodos()
        {
            throw new NotImplementedException();
        }
    }
}
