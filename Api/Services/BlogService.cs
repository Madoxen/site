using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Api.Services
{
    using System.Threading.Tasks;
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

        public async Task<IEnumerable<BlogEntry>> Get()
        {
            return (await _posts.FindAsync(entry => true)).ToList().OrderByDescending(x=>x.Date);
        }
            

        public async Task<BlogEntry> Get(string id) =>
            await _posts.FindAsync<BlogEntry>(entry => entry.Id == id).Result.FirstOrDefaultAsync();

        public async Task<BlogEntry> Create(BlogEntry entry)
        {
            await _posts.InsertOneAsync(entry);
            return entry;
        }

        public async Task Update(string id, BlogEntry bookIn) =>
            await _posts.ReplaceOneAsync(entry => entry.Id == id, bookIn);

        public async Task Remove(BlogEntry bookIn) =>
            await _posts.DeleteOneAsync(entry => entry.Id == bookIn.Id);

        public async Task Remove(string id) => 
            await _posts.DeleteOneAsync(entry => entry.Id == id);
    }
}