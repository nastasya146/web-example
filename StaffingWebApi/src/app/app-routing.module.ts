import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleAddComponent } from './schedule-add.component';
import { PeopleComponent } from './people.component';
import { PersonScheduleComponent } from './person-schedule.component';

const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'add-schedule/:id',  component: ScheduleAddComponent },
  { path: 'person-schedule/:id', component: PersonScheduleComponent },
  { path: 'people', component: PeopleComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
