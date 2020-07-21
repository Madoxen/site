using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Api.Services
{
    using Models;
    public class PostService
    {
        private readonly IMongoCollection<Post> _posts;

        public BookService(IPostDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _posts = database.GetCollection<Post>(settings.BooksCollectionName);
            
        }

        public List<Post> Get() =>
            _posts.Find(post => true).ToList();

        public Post Get(string id) =>
            _posts.Find<Post>(post => post.Id == id).FirstOrDefault();

        public Post Create(Post post)
        {
            _posts.InsertOne(post);
            return post;
        }

        public void Update(string id, Post bookIn) =>
            _posts.ReplaceOne(post => post.Id == id, bookIn);

        public void Remove(Post bookIn) =>
            _posts.DeleteOne(post => post.Id == bookIn.Id);

        public void Remove(string id) => 
            _posts.DeleteOne(post => post.Id == id);
    }
}