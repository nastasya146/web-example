using System;
using System.Collections.Generic;
using System.Text;

namespace ScheduleLibrary
{
    public class StaffingContext
    {
        public List<Schedule> Schedules;
        public List<Employee> People;
        public List<Shift> Shifts;
        public static int Id;
        public StaffingContext()
        {
            People = new List<Employee>();
            People.Add(new Employee("Ivan", "Ivanov"));
            People.Add(new Employee("Petr", "Petrov"));
            Schedules = new List<Schedule>();
            int n = 7;
            Shifts = new List<Shift>(n);
            for (int i = 0; i < 7; ++i)
            {
                Shifts.Add(new Shift(i * 60, (i + 1) * 60));
            }
            var date1 = new DateTime(2017, 10, 17);
            var date2 = new DateTime(2017, 10, 18);
            var schedule1 = new Schedule(n, date1);
            var schedule2 = new Schedule(n, date2);
            for (int i = 0; i < 7; ++i)
            {
                schedule1.Days[i] = Shifts[i];
            }
            for (int i = 0; i < 7; ++i)
            {
                schedule2.Days[i] = Shifts[i];
            }
            Schedules.Add(schedule1);
            Schedules.Add(schedule2);
            People[0].Id = 0;
            People[1].Id = 1;
            People[0].SetSchedule(Schedules[0]);
            People[1].SetSchedule(Schedules[1]);
            Id = 1;
        }
        public List<Employee> GetPeople()
        {
            return People;
        }
        public List<Schedule> GetSchedules()
        {
            return Schedules;
        }
        public List<Shift> GetShifts()
        {
            return Shifts;
        }
        public void AddShift(Shift shift)
        {
            Shifts.Add(shift);
        }
        public void AddSchedule(Schedule schedule)
        {
            Schedules.Add(schedule);
        }
        public void AddPerson(Employee person)
        {
            Id += 1;
            person.Id = Id;
            People.Add(person);
        }
    }
}
