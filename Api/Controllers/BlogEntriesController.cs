using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Api.Models;
using Api.Services;

namespace Api.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class BlogEntriesController : ControllerBase
    {
        private readonly ILogger<BlogEntriesController> _logger;
        private readonly BlogService _blogService; //CRUD MongoDB Blog Service

        public BlogEntriesController(BlogService blogService, ILogger<BlogEntriesController> logger)
        {
            _logger = logger;
            _blogService = blogService;
        }

        [HttpGet]
        public async Task<IEnumerable<BlogEntry>> Get()
        {
            return await _blogService.Get();
        }
    }
}
