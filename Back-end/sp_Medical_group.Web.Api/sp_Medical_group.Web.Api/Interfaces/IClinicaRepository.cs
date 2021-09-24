using sp_Medical_group.Web.Api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sp_Medical_group.Web.Api.Interfaces
{
    /// <summary>
    /// interface reponsavel pelo ClinicaRepository
    /// </summary>
    interface IClinicaRepository
    {
        /// <summary>
        /// Cadastrar uma nova clinica
        /// </summary>
        /// <param name="novaClinica">Objeto nova Clinica Cadastrado</param>
        void Cadastrar(Clinica novaClinica);

        /// <summary>
        /// Deletar uma clinica
        /// </summary>
        /// <param name="idClinica">ID da clinica deletada</param>
        void Deletar(short idClinica);
    }
}
