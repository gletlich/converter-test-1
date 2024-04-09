import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiInputNumberModule } from '@taiga-ui/kit';

@Component({
  selector: 'converter-input',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TuiInputNumberModule,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() amount: number | null = null;
  @Output() amountChange = new EventEmitter<number>();

  onAmountChange(newAmount: number) {
    this.amount = newAmount;

    this.amountChange.emit(this.amount);
  }
}
