import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiInputDateModule } from '@taiga-ui/kit';

@Component({
  selector: 'converter-date',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, AsyncPipe, TuiInputDateModule],
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DateComponent {
  // @Input() date: Date | undefined;
  @Output() dateChange = new EventEmitter<Date>();

  tuiDate: TuiDay;
  maxTuiDate: TuiDay;

  constructor() {
    const currentDate = new Date();

    this.tuiDate = new TuiDay(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );

    this.maxTuiDate = this.tuiDate;
  }

  onDateChange(newTuiDate: TuiDay) {
    this.tuiDate = newTuiDate;

    const newDate = new Date(newTuiDate.year, newTuiDate.month, newTuiDate.day);
    this.dateChange.emit(newDate);
  }
}
