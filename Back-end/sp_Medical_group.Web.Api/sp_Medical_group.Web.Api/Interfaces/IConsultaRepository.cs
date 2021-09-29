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
        void Cadastrar(Consultum novaConsulta);

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
        void Atualizar(short idConsulta, Consultum consultaAtualizada);

        /// <summary>
        /// Buscar uma consulta existente
        /// </summary>
        /// <param name="idConsulta">Id da consulta buscada</param>
        /// <returns>Retorna a consulta cadastrada</returns>
        Consultum BuscarConsulta(short idConsulta);

        /// <summary>
        /// Listar todas as consultas
        /// </summary>
        /// <returns>Lista de consultas</returns>
        List<Consultum> ListarTodos();

        /// <summary>
        /// Listar todas as consultas do medico e do paciente pelo seu id gerado no Token
        /// </summary>
        /// <param name="id">ID do medico ou do paciente</param>
        /// <param name="idTipo">Id do tipo de usuario</param>
        /// <returns>Um lista dependendo do ID do usuario</returns>
        List<Consultum> ListarMinhas(short id,short idTipo);

  

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
