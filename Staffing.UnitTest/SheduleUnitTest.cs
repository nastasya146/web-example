using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ScheduleLibrary;

namespace Staffing.UnitTest
{
    [TestClass]
    public class ScheduleUnitTest
    {
        [TestMethod]
        public void GetShiftTest()
        {
            //configure
            Employee person = new Employee("Ivan", "Ivanov");
            int n = 7;
            Shift[] Shifts = new Shift[n];
            for (int i = 0; i < 7; ++i)
            {
                Shifts[i] = new Shift(i * 60, (i + 1) * 60);
            }
            
                      
            DateTime date1 = new DateTime(2017, 10, 17);
            DateTime date2 = new DateTime(2017, 10, 18);
            var schedule = new Schedule(n, date1);
            for (int i = 0; i < 7; ++i)
            {
                schedule.Days[i] = Shifts[i];
            }
            //act
            Shift actual = schedule.GetShift(date2);
            //assert
            Assert.AreEqual(Shifts[1], actual);
        }
    }
}
