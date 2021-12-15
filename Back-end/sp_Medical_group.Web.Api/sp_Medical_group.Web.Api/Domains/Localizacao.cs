using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sp_Medical_group.Web.Api.Domains
{
    public class Localizacao
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]

        public string id { get; set; }

        public short idClinica { get; set; }

        [BsonElement("latitude")]
        [BsonRequired]
        public string Latitude { get; set; }

        [BsonRequired]
        public string Longitude { get; set; }

    }
}
