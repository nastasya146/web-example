import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Employee } from './employee';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ScheduleService {
  private peopleUrl = 'http://localhost:54840/api/schedule';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
}
