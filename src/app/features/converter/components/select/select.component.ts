import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import {
  TuiComboBoxModule,
  TuiDataListWrapperModule,
  TuiFilterByInputPipeModule,
  tuiItemsHandlersProvider,
} from '@taiga-ui/kit';

import { list } from '../../../../core/currencies-list.mock';
import { TuiStringHandler } from '@taiga-ui/cdk';
import { ImgFallbackDirective } from '../../directives/img-fallback.directive';

export type Item = {
  isoCode: string;
  name: string;
};

const STRINGIFY_ITEM: TuiStringHandler<Item> = (item: Item) => item.name;

@Component({
  standalone: true,
  selector: 'converter-select',
  templateUrl: './select.component.html',
  imports: [
    FormsModule,
    CommonModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiTextfieldControllerModule,
    ImgFallbackDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [tuiItemsHandlersProvider({ stringify: STRINGIFY_ITEM })],
})
export class SelectComponent {
  @Input() currency: Item | null = null;
  @Output() currencyChange = new EventEmitter<Item>();

  private currencyItems = Object.entries(list.currencies).map((item): Item => {
    return {
      isoCode: item[0],
      name: item[1],
    };
  });

  items = [this.currencyItems.slice(0, 5), this.currencyItems];
  labels = ['Recent', 'All'];

  getUrl(isoCode: string) {
    return `https://flagcdn.com/w40/${isoCode.slice(0, 2).toLowerCase()}.png`;
  }

  onCurrencyChange(newCurrency: Item) {
    this.currency = newCurrency;

    this.currencyChange.emit(this.currency);
  }
}
