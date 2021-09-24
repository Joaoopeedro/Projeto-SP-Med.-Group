using sp_Medical_group.Web.Api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sp_Medical_group.Web.Api.Interfaces
{
    /// <summary>
    /// Interface responsavel pela UsuarioRepository
    /// </summary>
    interface IUsuarioRepository
    {
        /// <summary>
        /// Logar um Usuario
        /// </summary>
        /// <param name="email">Objeto email de um Usuario ja cadastrado</param>
        /// <param name="senha">Objeto senha de um Usuario ja cadastrado</param>
        /// <returns> Um token do Usuario Logado</returns>
        Usuario Login(string email, string senha);

        /// <summary>
        /// Cadastrar um novo  Usuario
        /// </summary>
        /// <param name="novoTipo">Objeto do novo  Usuario</param>
        void Cadastrar(Usuario novoUsuario);

        /// <summary>
        /// Deleta um usuario existente
        /// </summary>
        /// <param name="idUsuario">ID do usuario deletado</param>
        void Deletar(short idUsuario);
    }
}
