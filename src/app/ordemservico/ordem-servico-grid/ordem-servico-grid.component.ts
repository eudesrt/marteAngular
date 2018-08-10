import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ordem-servico-grid',
  templateUrl: './ordem-servico-grid.component.html',
  styleUrls: ['./ordem-servico-grid.component.css']
})
export class OrdemServicoGridComponent {

  @Input() tabelaservico = [];
}
