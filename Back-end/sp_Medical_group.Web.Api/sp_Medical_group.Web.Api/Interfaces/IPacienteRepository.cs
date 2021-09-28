using sp_Medical_group.Web.Api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sp_Medical_group.Web.Api.Interfaces
{
    /// <summary>
    /// Interface responsavel pelo PacienteRepository
    /// </summary>
    interface IPacienteRepository
    {
        /// <summary>
        /// Cadastrar um novo Paciente
        /// </summary>
        /// <param name="novoPaciente">Novo Pciente Cadastrado</param>
        void Cadastrar(Paciente novoPaciente);

        /// <summary>
        /// Listar todos os pacientes cadastrados
        /// </summary>
        /// <returns>Uma lista de pacientes cadastrados</returns>
        List<Paciente> ListarTodos();

        /// <summary>
        /// Buscar um paciente atraves do seu ID
        /// </summary>
        /// <param name="id">ID do paciente que ira ser buscado</param>
        /// <returns>Uma usuario buscado pelo ID</returns>
        Paciente BuscarPorId(short id);

        /// <summary>
        /// Delatar um paciente pelo seu ID
        /// </summary>
        /// <param name="id">iD do paciente que ira ser deletado</param>
        void Deletar(short id);

        /// <summary>
        /// Atualizar os dados de um determinado paciente
        /// </summary>
        /// <param name="pacienteAtualizado">Objeto do paciente atualizado</param>
        void Atualizar(Paciente pacienteAtualizado);
    }
}
