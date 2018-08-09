import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoaGridComponent } from './pessoa-grid/pessoa-grid.component';
import { SharedModule } from './../shared/shared.module';

import { InputTextModule } from '../../../node_modules/primeng/components/inputtext/inputtext';
import { ButtonModule } from '../../../node_modules/primeng/components/button/button';
import { DataTableModule } from '../../../node_modules/primeng/components/datatable/datatable';
import { TooltipModule } from '../../../node_modules/primeng/components/tooltip/tooltip';
import { InputTextareaModule } from '../../../node_modules/primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from '../../../node_modules/primeng/components/calendar/calendar';
import { SelectButtonModule } from '../../../node_modules/primeng/components/selectbutton/selectbutton';
import { DropdownModule } from '../../../node_modules/primeng/components/dropdown/dropdown';
import { InputMaskModule } from '../../../node_modules/primeng/components/inputmask/inputmask';

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
    InputMaskModule,

    SharedModule

  ],
  declarations: [
                  PessoaGridComponent,
                  PessoaCadastroComponent,
                  PessoasComponent
                ],
  exports: [
              PessoaCadastroComponent,
              PessoasComponent
          ]
})
export class PessoaModule { }
