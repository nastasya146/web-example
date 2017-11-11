import { Shift } from './shift';

export class Schedule {
  days: Shift[];
  period: number;
  startdate: Date;

  constructor(period: number) {
    this.startdate = new Date();
    this.period = period;
    let days: Shift[] = [{start: 600, end: 1080},
                         {start: 600, end: 1080},
                         {start: 600, end: 1080},
                         {start: 600, end: 1080},
                         {start: 600, end: 1080},
                         {start: 600, end: 1080},
                         {start: 600, end: 1080}, ];
    this.days = days;
    }
  }

