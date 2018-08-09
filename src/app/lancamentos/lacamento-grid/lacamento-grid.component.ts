import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lacamento-grid',
  templateUrl: './lacamento-grid.component.html',
  styleUrls: ['./lacamento-grid.component.css']
})
export class LacamentoGridComponent  {

  @Input() lancamentos = [];

}
