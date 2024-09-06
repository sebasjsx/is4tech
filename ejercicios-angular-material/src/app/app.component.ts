import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePickerRangeComponent } from '../components/date-picker-range/date-picker-range.component';
import { DatePickerMonthYearComponent } from '../components/date-picker-month-year/date-picker-month-year.component';
import { DatePickerNormalComponent } from '../components/date-picker-normal/date-picker-normal.component';
import { DatePickerMinMaxComponent } from '../components/date-picker-min-max/date-picker-min-max.component';
import { DialogNameComponent } from '../components/dialog-name/dialog-name.component';
import { TableComponent } from '../components/table/table.component';
import { StepperComponent } from '../components/stepper/stepper.component';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    DatePickerRangeComponent,
    DatePickerMonthYearComponent,
    DatePickerNormalComponent,
    DatePickerMinMaxComponent,
    DialogNameComponent,
    TableComponent,
    StepperComponent,
    MatTabsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ejercicios-angular-material';
}
