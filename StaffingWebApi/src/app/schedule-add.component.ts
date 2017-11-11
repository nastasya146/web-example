import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { PersonService } from './person.service';
import { Employee } from './employee';
import { Schedule } from './schedule';
import { Shift } from './shift';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-schedule',
  templateUrl: './schedule-add.component.html',
})
export class ScheduleAddComponent implements OnInit {
  person: Employee;
  time1: NgbTimeStruct[] = [{hour: 10, minute: 0, second: 0},
                            {hour: 10, minute: 0, second: 0},
                            {hour: 10, minute: 0, second: 0},
                            {hour: 10, minute: 0, second: 0},
                            {hour: 10, minute: 0, second: 0},
                            {hour: 10, minute: 0, second: 0},
                            {hour: 10, minute: 0, second: 0}];
  time2: NgbTimeStruct[] = [{hour: 18, minute: 0, second: 0},
                            {hour: 18, minute: 0, second: 0},
                            {hour: 18, minute: 0, second: 0},
                            {hour: 18, minute: 0, second: 0},
                            {hour: 18, minute: 0, second: 0},
                            {hour: 18, minute: 0, second: 0},
                            {hour: 18, minute: 0, second: 0}];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location) { }

    ngOnInit(): void {
      this.getPerson();
    }
    getPerson(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.personService.getPerson(+params.get('id')))
        .subscribe(person => this.person = person);
    }
    goBack(): void {
      this.location.back();
    }
    save(): void {
      let list = [1, 2, 3, 4, 5, 6, 7];
      for (let i in list) {
        this.person.schedule.days[i].start = this.time1[i].hour * 60 + this.time1[i].minute;
      }
      this.personService.update(this.person)
      .then(() => this.goBack());
    }
}
