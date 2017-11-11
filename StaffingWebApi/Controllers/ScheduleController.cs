using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ScheduleLibrary;


namespace Staffing.Controllers
{
    [Route("api/schedule")]
    public class ScheduleController : Controller
    {
        private readonly StaffingContext _context;
        public ScheduleController(StaffingContext _context)
        {
            this._context = _context;
        }

        [HttpGet]
        public List<Schedule> GetAll()
        {
            var schedules = _context.GetSchedules();
            return schedules;
        }

        [HttpGet("{id}", Name = "GetSchedule")]
        public IActionResult GetById(int id)
        {
            var people = _context.GetPeople();
            var person = people.FirstOrDefault(pers => pers.Id == id);
            var result = person.Schedule;
            return new ObjectResult(result);
        }

        [HttpPost]
        public IActionResult CreateSchedule([FromBody] Schedule schedule)
        {
            _context.AddSchedule(schedule);            
            return Ok();
        }
    }
}
