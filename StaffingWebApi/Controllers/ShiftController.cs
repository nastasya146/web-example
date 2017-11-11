using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ScheduleLibrary;
using Newtonsoft.Json;


namespace Staffing.Controllers
{    
    [Route("api/shift")]
    public class ShiftController : Controller
    {
        private readonly StaffingContext _context;
        public ShiftController(StaffingContext _context)
        {
            this._context = _context;
        }
        
        [HttpGet( Name = "GetShift")]
        public List<Shift> GetAll()
        {
            return _context.GetShifts();
        }
        
        [HttpPost]
        public IActionResult CreateShift([FromBody] Shift shift)
        {
            if (shift == null)
            {
                return BadRequest();
            }                        
            _context.AddShift(shift);
            return Ok();            
        }
    }
}
