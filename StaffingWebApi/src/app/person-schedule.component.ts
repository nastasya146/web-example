import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { PersonService } from './person.service';
import { Employee } from './employee';

@Component({
  selector: 'person-schedule',
  templateUrl: '/person-schedule.component.html',
  styleUrls: ['./person-schedule.component.css'],

})
export class PersonScheduleComponent implements OnInit {
  person: Employee;

  constructor(
    private router: Router,
    private personService: PersonService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

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
  changeSchedule(): void {
    this.router.navigate(['/add-schedule', this.person.id]);
  }
}
