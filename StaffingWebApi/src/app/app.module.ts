import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people.component';
import { ScheduleAddComponent } from './schedule-add.component';
import { PersonScheduleComponent } from './person-schedule.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PersonService } from './person.service';
import { AppRoutingModule } from './app-routing.module';
import { WorkingTimePipe } from './working-time.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    PersonScheduleComponent,
    PeopleComponent,
    ScheduleAddComponent,
    WorkingTimePipe
  ],
  providers: [ PersonService ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
