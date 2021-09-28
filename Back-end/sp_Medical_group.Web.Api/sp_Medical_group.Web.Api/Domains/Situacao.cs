using System;
using System.Collections.Generic;

#nullable disable

namespace sp_Medical_group.Web.Api.Domains
{
    public partial class Situacao
    {
        public Situacao()
        {
            Consulta = new HashSet<Consultum>();
        }

        public short IdSituacao { get; set; }
        public string Descricao { get; set; }

        public virtual ICollection<Consultum> Consulta { get; set; }
    }
}
