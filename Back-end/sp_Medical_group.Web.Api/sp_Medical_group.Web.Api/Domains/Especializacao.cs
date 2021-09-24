﻿using System;
using System.Collections.Generic;

#nullable disable

namespace sp_Medical_group.Web.Api.Domains
{
    public partial class Especializacao
    {
        public Especializacao()
        {
            Medicos = new HashSet<Medico>();
        }

        public short IdEspecializacao { get; set; }
        public string TipoEspecializacao { get; set; }

        public virtual ICollection<Medico> Medicos { get; set; }
    }
}
