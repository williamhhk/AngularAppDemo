using System;
using System.Collections.Generic;
using System.Diagnostics;
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
        private AdventureWorkEntities _ctx; // = new AdventureWorkEntities();

        public AwController() : this (new AdventureWorkEntities())
        {
        }

        public AwController(AdventureWorkEntities ctx)
        {
            _ctx = ctx;
        }


        [Route("employees")]
        public IHttpActionResult GetAll()
        {
            var employees = _ctx.vEmployees.ToList();
            return Ok(_ctx.vEmployees);
        }

        [Route("employees/{id}")]
        public IHttpActionResult GetEmployee(int id)
        {
            var employee = _ctx.vEmployees.Where(i => i.BusinessEntityID == id).ToList();
            if (employee.Any()) return Ok(employee.FirstOrDefault());
            return NotFound();
        }

        [Route("employees/{id}")]
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                var recordToDelete = _ctx.vEmployees.Where(i => i.BusinessEntityID == id).Single();
                _ctx.vEmployees.Remove(recordToDelete);
                _ctx.SaveChanges();
            }
            catch
            {
                return BadRequest();
            }
            return Ok();
        }

        /*
        Use this 
                $http.post('http://localhost:50578/api/aw/v1/employees', data);

        Or This with '='

            $http({
            method: 'POST',
                    url: 'http://localhost:50578/api/aw/v1/employees',
                    data: '=' + JSON.stringify(data),
                });

            or 

            $http({
            method: 'POST',
                    url: 'http://localhost:50578/api/aw/v1/employees',
                    data: { field1 : data1, field2 : data2 }
                });

        No auto serialization by ASP.NET
        public IHttpActionResult Create(HttpRequestMessage employee)
        {
            vEmployee recordToAdd = new vEmployee();
            var data = employee.Content.ReadAsStringAsync().Result;

        */
        [Route("employees")]
        [HttpPost]
        public IHttpActionResult Create(vEmployee employee)
        {
            vEmployee recordToAdd = employee;
            //var data = employee.Content.ReadAsStringAsync().Result;
            try
            {
                _ctx.vEmployees.Add(recordToAdd);
                _ctx.SaveChanges();
            }
            catch
            {
                return BadRequest();
            }
            return Ok(recordToAdd);
        }

        [Route("employees")]
        [HttpPut]
        public IHttpActionResult Update(vEmployee employee)
        {
            try
            {
               // var recordToUpdate = _ctx.vEmployees.Where(i=>i.BusinessEntityID == employee.BusinessEntityID).Single();
                var recordToUpdate = _ctx.vEmployees.Where(i => i.BusinessEntityID == employee.BusinessEntityID).Single();
                _ctx.Entry(recordToUpdate).CurrentValues.SetValues(employee);
                _ctx.SaveChanges();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
