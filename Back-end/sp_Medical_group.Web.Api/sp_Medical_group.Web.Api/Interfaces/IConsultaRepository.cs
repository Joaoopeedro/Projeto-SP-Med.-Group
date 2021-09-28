using sp_Medical_group.Web.Api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sp_Medical_group.Web.Api.Interfaces
{

    /// <summary>
    /// Interface responsavel pelo ConsultaRepository
    /// </summary>
    interface IConsultaRepository
    {
        /// <summary>
        /// Cadastrar uma nova consulta
        /// </summary>
        /// <param name="novaConsulta"> Objeto de uma nova consulta</param>
        void Cadastrar(Consulta novaConsulta);

        /// <summary>
        /// Deletar uma consulta
        /// </summary>
        /// <param name="idConsulta">id da consulta deletada</param>
        void Deletar(short idConsulta);

        /// <summary>
        /// Atualizar dados da Consulta
        /// </summary>
        /// <param name="idConsulta">Id da consulta Atualizada</param>
        /// <param name="consultaAtualizada">Dados Atualizados</param>
        void Atualizar(short idConsulta,Consulta consultaAtualizada);

        /// <summary>
        /// Buscar uma consulta existente
        /// </summary>
        /// <param name="idConsulta">Id da consulta buscada</param>
        /// <returns>Retorna a consulta cadastrada</returns>
        Consulta BuscarConsulta(short idConsulta);

        /// <summary>
        /// Listar todas as consultas
        /// </summary>
        /// <returns>Lista de consultas</returns>
        List<Consulta> ListarTodos();

        /// <summary>
        /// Lista todos as consultas que um determinado medico 
        /// </summary>
        /// <param name="idUsuario">ID do medico que participa das consultas listados</param>
        /// <returns>Uma lista de consultas de um determinado medico</returns>
        List<Consulta> ListarMinhasMedico(short idMedico);

        /// <summary>
        /// Lista todos as consultas que um determinado paciente
        /// </summary>
        /// <param name="IdPaciente">ID do paciente que participa das consultas listados</param>
        /// <returns>Uma lista de consultas de um determinado paciente</returns>
        List<Consulta> ListarMinhasPaciente(short idPaciente);

        /// <summary>
        /// Altera uma descricao de uma consulta
        /// </summary>
        /// <param name="idConsulta">ID da consulta que terá a descricao alterada</param>
        /// <param name="descricao">Paremetro que sera atualizado</param>
        void MudarDescricao(short idConsulta, string descricao);

        /// <summary>
        /// Altera uma Situacao de uma consulta
        /// </summary>
        /// <param name="idConsulta">ID da consulta que terá a descricao alterada</param>
        /// <param name="idSituacao">ID que sera atualizado</param>
        void MudarSituacao(short idConsulta, short idSituacao);


    }
}
