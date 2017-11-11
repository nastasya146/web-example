import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Employee } from './employee';
import { Schedule } from './schedule';
import { Headers, Http } from '@angular/http';

@Injectable()
export class PersonService {
  private peopleUrl = 'http://localhost:54840/api/people';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getPeople(): Promise<Employee[]> {
    return this.http.get(this.peopleUrl)
              .toPromise()
              .then(response => response.json() as Employee[])
              .catch(this.handleError);
  }
  getPerson(id: number): Promise<Employee> {
    const url = `${this.peopleUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Employee)
      .catch(this.handleError);
  }
  update(person: Employee): Promise<Schedule> {
    const url = `${this.peopleUrl}/${person.id}`;
    return this.http
      .put(url, JSON.stringify(person.schedule), {headers: this.headers})
      .toPromise()
      .then(() => person.schedule)
      .catch(this.handleError);
  }
  create(name: string, lastname: string): Promise<Employee> {
    return this.http
      .post(this.peopleUrl, JSON.stringify({ name: name, lastname: lastname }), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Employee)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
