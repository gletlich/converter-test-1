import { Component } from '@angular/core';

import { DateComponent } from './components/date/date.component';
import { InputComponent } from './components/input/input.component';
import { Item, SelectComponent } from './components/select/select.component';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [SelectComponent, DateComponent, InputComponent],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss',
})
export class ConverterComponent {
  date: Date | undefined;

  currencyFrom: Item | null = null;
  currencyTo: Item | null = null;

  amountFrom: number | null = null;
  amountTo: number | null = null;

  log() {
    console.log(this.date);
    console.log(this.currencyFrom);
    console.log(this.currencyTo);
    console.log(this.amountFrom);
    console.log(this.amountTo);
  }

  onDateChange(newDate: Date) {
    this.date = newDate;

    this.log();
  }

  onCurrencyChange(newCurrency: Item, type: 'from' | 'to') {
    if (type === 'from') {
      this.currencyFrom = newCurrency;
    } else {
      this.currencyTo = newCurrency;
    }

    this.log();
  }

  onAmountChange(newAmount: number, type: 'from' | 'to') {
    if (type === 'from') {
      this.amountFrom = newAmount;
    } else {
      this.amountTo = newAmount;
    }

    this.log();
  }
}
