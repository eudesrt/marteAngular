import { Component, OnInit } from '@angular/core';
import { WsOrdemServicoService } from '../ws-ordem-servico.service';

@Component({
  selector: 'app-ordem-servico-pesquisa',
  templateUrl: './ordem-servico-pesquisa.component.html',
  styleUrls: ['./ordem-servico-pesquisa.component.css']
})
export class OrdemServicoPesquisaComponentquisaComponent implements OnInit {

  constructor(private wOrdemServicoService: WsOrdemServicoService) { }
  tabelaservico = [];

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {

      console.log('Iniciando');
      console.log();
      this.wOrdemServicoService.pesquisarOrdemServico().subscribe(tabelaservico => this.tabelaservico = tabelaservico);
  }




}
