using System;
using System.Collections.Generic;
using System.Text;

namespace ScheduleLibrary
{
    public class Shift
    {
        public int Id { get; set; }
        public int Start { get; set; }
        public int End { get; set; }
        //}
        //public class Shift
        //{        
        //public int Start { get; set; }
        //public int End { get; set; }
        public const int minutesPerDay = 1440;
        public Shift()
        { }
        public Shift(int start, int end)
        {
            if ((start <= minutesPerDay) & (start >= 0))
            {
                this.Start = start;
            }
            else
            {
                Console.WriteLine("Error");
            }
            if ((end <= minutesPerDay) & (end > start) & (end >= 0))
            {
                this.End = end;
            }
            else
            {
                Console.WriteLine("Error");
            }
            //this.Start = start;
            //this.End = end;
        }
        public int GetLenght()
        {
            return End - Start;
        }
        public override string ToString()
        {
            return Start / 60 + ":" + Start % 60 + " - " + End / 60 + ":" + End % 60;
        }
    }
}
