import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { LacamentoCadastrComponent } from './lacamento-cadastr/lacamento-cadastr.component';
import { ComponenteComponent } from './componente/componente.component';
import { LacamentoGridComponent } from './lacamento-grid/lacamento-grid.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    SharedModule
  ],
  declarations: [LacamentoCadastrComponent,
                  ComponenteComponent,
                  LacamentoGridComponent
  ],
  exports: [
            LacamentoCadastrComponent,
            ComponenteComponent
  ]
})
export class LancamentosModule { }
