using System;
using System.Collections.Generic;
using System.Text;

namespace ScheduleLibrary
{
    public class Employee
    {
        public int Id;
        public string Name;
        public string Lastname;
        public Schedule Schedule;
        public Employee()
        {
            Name = "undefined";
            Lastname = "undefined";
            Schedule = null;
        }
        public Employee(string nm, string ln)
        {
            Name = nm;
            Lastname = ln;
        }
        public void SetSchedule(Schedule schedule)
        {
            this.Schedule = schedule;
        }
        public override string ToString()
        {
            return Name + " " + Lastname;
        }
    }
}
