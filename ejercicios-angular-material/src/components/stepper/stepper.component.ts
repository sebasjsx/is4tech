import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';

export interface DialogData {
  name: string;
  title: string;
}

@Component({
  selector: 'stepper',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    CommonModule
  ],
  providers: [
    provideNativeDateAdapter(),
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent {
  maxDate: Date = new Date(Date.now() - 86400000);
  birthdate = new FormControl('', Validators.required);
  name = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]);
  dpiToggle = new FormControl(false);
  dpi = new FormControl({ value: '', disabled: true }, Validators.required);
  private _formBuilder = inject(FormBuilder);

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor() {
    this.dpiToggle.valueChanges.subscribe(isDpiEnabled => {
      if (isDpiEnabled) {
        this.dpi.enable();
      } else {
        this.dpi.disable();
      }
    });
  }
}