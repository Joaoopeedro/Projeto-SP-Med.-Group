using Microsoft.AspNetCore.Http;
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
        /// <param name="novoUsuario">Objeto do novo  Usuario</param>
        void Cadastrar(Usuario novoUsuario);

        /// <summary>
        /// Deleta um usuario existente
        /// </summary>
        /// <param name="idUsuario">ID do usuario deletado</param>
        void Deletar(short idUsuario);

        /// <summary>
        /// Buscar um usuario pelo seu id
        /// </summary>
        /// <param name="id">Id do Usuario buscado</param>
        /// <returns>Um usuario r</returns>
        Usuario BuscarPorId(short id);

        /// <summary>
        /// Salvar uma imagem do perdil no banco de dados 
        /// </summary>
        /// <param name="foto">Imagem que sera salvada</param>
        /// <param name="idUsuario">ID do usuario que a imagem ira ser salva</param>
        void SalvarPerfilBD(IFormFile foto, short idUsuario);

        /// <summary>
        /// Consultar uma imagem pelo BD
        /// </summary>
        /// <param name="idUsuario">ID do usuario que esta consultando</param>
        /// <returns>Um Perfil</returns>
        string ConsultarPerfilBD(short idUsuario);
    }
}
