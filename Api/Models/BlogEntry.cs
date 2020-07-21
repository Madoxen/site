using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Api.Models
{
    /// <summary>
    /// Model representing blog entry in mongoDB
    /// </summary>
    public class BlogEntry
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("date")]
        public DateTime Date { get; set; }

        [BsonElement("title")]
        public string Title { get; set; }
        [BsonElement("contents")]
        public string Contents { get; set; }
        [BsonElement("author")]
        public string Author { get; set; }

    }
}
