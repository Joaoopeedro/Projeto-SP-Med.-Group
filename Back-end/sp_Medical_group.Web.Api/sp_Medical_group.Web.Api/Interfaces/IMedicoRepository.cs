using sp_Medical_group.Web.Api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sp_Medical_group.Web.Api.Interfaces
{
    /// <summary>
    /// Interface Reponsavel pelo MedicoRepository
    /// </summary>
    interface IMedicoRepository
    {
        /// <summary>
        /// Cadastra um novo medico
        /// </summary>
        /// <param name="novoMedico">Novo medico cadastrado</param>
        void Cadastrar(Medico novoMedico);

        /// <summary>
        /// Lista de medicos cadastrados
        /// </summary>
        /// <returns>Uma lista de medicos cadastrados</returns>
        List<Medico> ListarTodos();

        /// <summary>
        /// Buscar um medico atraves do ID
        /// </summary>
        /// <param name="idMedico">Id do medico a ser buscado</param>
        /// <returns></returns>
        Medico BuscarPorId(short idMedico);

        /// <summary>
        /// Deletar um usuario existente
        /// </summary>
        /// <param name="idMedico">Id do medico a ser deletado</param>

        void Deletar(short idMedico);

       /// <summary>
       /// Atualizar dados do medico
       /// </summary>
       /// <param name="id">Id do medico a ser atualizado</param>
       /// <param name="medicoAtualizado">Dados do medico atializado</param>
        void Atualizar( short id ,Medico medicoAtualizado);
    }
}
