using Microsoft.AspNetCore.Http;
using sp_Medical_group.Web.Api.Context;
using sp_Medical_group.Web.Api.Domains;
using sp_Medical_group.Web.Api.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
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

        public Usuario BuscarPorId(short id)
        {
            return ctx.Usuarios.FirstOrDefault(U => U.IdUsuario == id);
        }

        public void Cadastrar(Usuario novoUsuario)
        {
            ctx.Usuarios.Add(novoUsuario);
            ctx.SaveChanges();
        }

        public string ConsultarPerfilBD(short idUsuario)
        {
            ImagemUsuario imagemUsuario = new ImagemUsuario();
            imagemUsuario = ctx.ImagemUsuarios.FirstOrDefault(i => i.IdUsuario == idUsuario);

            //se exixtir imagem de perfil para o usuario
            if (imagemUsuario != null)
            {
                //Converte o valor de um matriz de inteiros (byte) em string.
                return Convert.ToBase64String(imagemUsuario.Binario);
            }

            return null;
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

        public void SalvarPerfilBD(IFormFile foto, short idUsuario)
        {
            ImagemUsuario imagemUsuario = new ImagemUsuario();

            using (var ms = new MemoryStream())
            {
                //Copia a imagem enviada para memoria. (ms)
                foto.CopyTo(ms);

                imagemUsuario.Binario = ms.ToArray();
                //Nome do arquivo
                imagemUsuario.NomeArquivo = foto.FileName;
                //extencao do arquivo
                imagemUsuario.MimeType = foto.FileName.Split('.').Last();
                //idUsuario
                imagemUsuario.IdUsuario = idUsuario;


            }
            //Analizar se usuarios ja possui foto de perfil.
            ImagemUsuario imagemExistente = new ImagemUsuario();

            ctx.ImagemUsuarios.FirstOrDefault(i => i.IdUsuario == idUsuario);
            if (imagemExistente != null)
            {
                //Atualizar imagem de Perfil atual  pelo  novo  objeto enviado;
                imagemExistente.Binario = imagemUsuario.Binario;
                imagemExistente.NomeArquivo = imagemUsuario.NomeArquivo;
                imagemExistente.MimeType = imagemUsuario.MimeType;
                imagemExistente.IdUsuario = idUsuario;

                ctx.ImagemUsuarios.Update(imagemExistente);
            }

            ctx.ImagemUsuarios.Add(imagemUsuario);
            //Salvar as modificações
            ctx.SaveChanges();
        }

       
    }
}
