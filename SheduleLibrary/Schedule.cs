using System;
using System.Collections.Generic;
using System.Text;

namespace ScheduleLibrary
{
    public class Schedule
    {
        public Shift[] Days;
        public int Period;
        public DateTime Startdate;
        public Schedule(int period, DateTime date)
        {
            Days = new Shift[period];
            for (int i = 0; i < period; ++i)
            {
                Days[i] = new Shift(600, 1080);
            }
            this.Period = period;
            Startdate = date;
        }
        public Shift GetShift(DateTime date)
        {
            int index = Convert.ToInt32((date - Startdate).TotalDays) % Period;
            return Days[index];
        }
        public override string ToString()
        {
            string s = "";
            for (int i = 0; i < Period; ++i)
            {
                s += (i + 1) + " " + Days[i] + ",\n";
            }
            return ("Start date: " + Startdate.Date.ToString("d") + "\n" + s);
        }
    }    
}
