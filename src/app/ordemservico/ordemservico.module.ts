import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdemServicoPesquisaComponentquisaComponent } from './ordem-servico-pesquisa/ordem-servico-pesquisa.component';
import { OrdemServicoGridComponent } from './ordem-servico-grid/ordem-servico-grid.component';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { OrdemServicoNewComponent } from './ordem-servico-new/ordem-servico-new.component';

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
  ],
  declarations: [OrdemServicoPesquisaComponentquisaComponent, OrdemServicoGridComponent, OrdemServicoNewComponent],
  exports: [OrdemServicoPesquisaComponentquisaComponent, OrdemServicoNewComponent]
})
export class OrdemservicoModule { }
