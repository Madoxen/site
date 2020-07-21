using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Api.Services
{
    using Models;


    /// <summary>
    /// Service that enscapulates MongoDB CRUD operations
    /// </summary>
    public class BlogService
    {
        private readonly IMongoCollection<BlogEntry> _posts;

        public BlogService(IBlogEntryDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _posts = database.GetCollection<BlogEntry>(settings.CollectionName);
            
        }

        public List<BlogEntry> Get() =>
            _posts.Find(entry => true).ToList();

        public BlogEntry Get(string id) =>
            _posts.Find<BlogEntry>(entry => entry.Id == id).FirstOrDefault();

        public BlogEntry Create(BlogEntry entry)
        {
            _posts.InsertOne(entry);
            return entry;
        }

        public void Update(string id, BlogEntry bookIn) =>
            _posts.ReplaceOne(entry => entry.Id == id, bookIn);

        public void Remove(BlogEntry bookIn) =>
            _posts.DeleteOne(entry => entry.Id == bookIn.Id);

        public void Remove(string id) => 
            _posts.DeleteOne(entry => entry.Id == id);
    }
}