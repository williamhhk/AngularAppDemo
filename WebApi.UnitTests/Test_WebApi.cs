using AdventureWorkWebApi;
using AdventureWorkWebApi.Controllers;
using Moq;
using NUnit.Framework;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Results;

namespace WebApi.UnitTests
{
    [TestFixture]
    public class ApiTest
    {
        private IQueryable<vEmployee> _data;
        Mock<DbSet<vEmployee>> _dbSetMock;
        Mock<AdventureWorkEntities> _customDbContextMock;
        AwController _controller;

        public void InitializeDBContext()
        {
            var data = new List<vEmployee> {
                new vEmployee
                {
                    BusinessEntityID = 1,
                    Title = "Mr",
                    FirstName = "NUnit Test",
                    LastName = "This is a test",
                    JobTitle = "Engineer",
                    City = "Phoenix",
                    CountryRegionName ="USA"
                },
                new vEmployee
                {
                    BusinessEntityID = 100,
                    Title = "Mr",
                    FirstName = "NUnit Test",
                    LastName = "This is a test",
                    JobTitle = "Engineer",
                    City = "Phoenix",
                    CountryRegionName ="USA"
                },
            };

            _data = data.AsQueryable();
            _dbSetMock = new Mock<DbSet<vEmployee>>();
            _dbSetMock.As<IQueryable<vEmployee>>().Setup(m => m.Provider).Returns(_data.Provider);
            _dbSetMock.As<IQueryable<vEmployee>>().Setup(m => m.Expression).Returns(_data.Expression);
            _dbSetMock.As<IQueryable<vEmployee>>().Setup(m => m.ElementType).Returns(_data.ElementType);
            _dbSetMock.As<IQueryable<vEmployee>>().Setup(m => m.GetEnumerator()).Returns(_data.GetEnumerator());
            _customDbContextMock = new Mock<AdventureWorkEntities>();
            _customDbContextMock.Setup(x => x.vEmployees).Returns(_dbSetMock.Object);
        }

        [Test]
        public void GetEmployee_Ok_Status()
        {
            // Arrance
            InitializeDBContext();

            //  Act
            _controller = new AwController(_customDbContextMock.Object);
            IHttpActionResult response = _controller.GetEmployee(100);
            var result= response as OkNegotiatedContentResult<List<vEmployee>>;

            // Assert
            Assert.AreEqual(100, result.Content.FirstOrDefault().BusinessEntityID);
            Assert.AreEqual(100, result.Content.FirstOrDefault().BusinessEntityID);

        }

        [Test]
        public void GetEmployee_BadRequest_Status()
        {
            // Arrance
            InitializeDBContext();

            //  Act
            _controller = new AwController(_customDbContextMock.Object);
            IHttpActionResult response = _controller.GetEmployee(10000000);
            var result = response as NotFoundResult;

            //// Assert
            //Assert.AreEqual(10000000, result.Content.FirstOrDefault().BusinessEntityID);
        }

    }
}
