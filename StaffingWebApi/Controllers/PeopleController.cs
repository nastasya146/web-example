using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ScheduleLibrary;
using Microsoft.AspNetCore.Cors;

namespace Staffing.Controllers
{
  [Route("api/people")]
  public class PeopleController : Controller
  {
    private readonly StaffingContext _context;

    public PeopleController(StaffingContext _context)
    {
      this._context = _context;
    }
    [HttpGet]
    public List<Employee> GetAll()
    {
      return _context.GetPeople();
    }
    [HttpGet("{id}", Name = "GetPerson")]
    public IActionResult GetById(int id)
    {
      var people = _context.GetPeople();
      var person = people.FirstOrDefault(pers => pers.Id == id);
      return new ObjectResult(person);
    }
    [HttpPut("{id}")]
    public IActionResult UpdatePerson(long id, [FromBody] Schedule schedule)
    {
      var people = _context.GetPeople();
      var person = people.FirstOrDefault(pers => pers.Id == id);
      if (schedule == null || person.Id != id)
      {
        return BadRequest();
      }
      if (person == null)
      {
        return NotFound();
      }

      person.Schedule = schedule;
      return new NoContentResult();
    }
    [HttpPost]
    public IActionResult CreatePerson([FromBody] Employee person)
    {
      person.Schedule = new Schedule(7, new DateTime());
      _context.AddPerson(person);
      return Ok();
    }
  }
}
