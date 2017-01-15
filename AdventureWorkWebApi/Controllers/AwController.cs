using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AdventureWorkWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/aw/v1")]
    public class AwController : ApiController
    {
        private AdventureWorkEntities _ctx = new AdventureWorkEntities();
        
        [Route("employees")]
        public IHttpActionResult GetAll()
        {
            var employees = _ctx.vEmployees.ToList();
            return Ok(_ctx.vEmployees);
        }
    }
}
