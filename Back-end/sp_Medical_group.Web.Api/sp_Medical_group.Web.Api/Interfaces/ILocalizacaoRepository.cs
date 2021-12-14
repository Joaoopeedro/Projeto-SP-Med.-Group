using sp_Medical_group.Web.Api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sp_Medical_group.Web.Api.Interfaces
{
    interface ILocalizacaoRepository
    {
        List<Localizacao> ListarTodas();

        void Cadastrar(Localizacao novaLocalizacao);


    }
}
