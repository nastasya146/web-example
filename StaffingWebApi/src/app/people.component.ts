import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Employee } from './employee';
import { PersonService } from './person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],

providers: [PersonService]
})
export class PeopleComponent implements OnInit {
  people: Employee[];
  selectedPerson: Employee;

  constructor(
    private router: Router,
    private personService: PersonService) { }

  getPeople(): void {
    this.personService.getPeople().then(people => this.people = people);
  }
  ngOnInit(): void {
    this.getPeople();
  }
  onSelect(person: Employee): void {
    this.selectedPerson = person;
  }
  gotoSchedule(): void {
    this.router.navigate(['/person-schedule', this.selectedPerson.id]);
  }
  addSchedule(): void {
    this.router.navigate(['/add-schedule', this.selectedPerson.id]);
  }
  addPerson(name: string, lastname: string): void {
    name = name.trim();
    if (!name || !lastname) { return; }
    this.personService.create(name, lastname)
      .then(person => {
        this.people.push(person);
        this.selectedPerson = null;
      });
  }
}


