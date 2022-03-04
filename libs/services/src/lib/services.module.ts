import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CurrencyService } from './currency.service';

@NgModule({
    imports: [CommonModule],
    providers: [CurrencyService],
    exports: [],
})
export class ServicesModule {}
