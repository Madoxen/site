using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Api.Models
{
    /// <summary>
    /// Model representing post in mongoDB
    /// </summary>
    public class Post
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public DateTime Date { get; set; }
        public string Title { get; set; }
        public string Contents { get; set; }
        public string Author { get; set; }

    }
}
