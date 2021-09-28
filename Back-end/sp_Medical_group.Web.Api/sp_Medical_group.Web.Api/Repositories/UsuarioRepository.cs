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
    /// Repositorio responsavel pelo Usuario
    /// </summary>
    public class UsuarioRepository : IUsuarioRepository
    {
        /// <summary>
        /// Objeto contexto por onde serão chamados os métodos do EF Core
        /// </summary>
        SpMedicalContext ctx = new();

        public void Cadastrar(Usuario novoUsuario)
        {
            ctx.Usuarios.Add(novoUsuario);
            ctx.SaveChanges();
        }

        public void Deletar(short idUsuario)
        {
            Usuario usuarioBuscado = ctx.Usuarios.FirstOrDefault(u => u.IdUsuario == idUsuario);
            if (usuarioBuscado == null)
            {
                throw new Exception("Id nao existente");
            }
            ctx.Usuarios.Remove(usuarioBuscado);
            ctx.SaveChanges();
        }

        public Usuario Login(string email, string senha)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
    }
}
