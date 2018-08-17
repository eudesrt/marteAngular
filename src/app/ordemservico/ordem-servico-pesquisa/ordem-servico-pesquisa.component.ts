import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { WsOrdemServicoService } from '../ws-ordem-servico.service';
import { OrdemServico } from '../../core/model';

@Component({
  selector: 'app-ordem-servico-pesquisa',
  templateUrl: './ordem-servico-pesquisa.component.html',
  styleUrls: ['./ordem-servico-pesquisa.component.css']
})
export class OrdemServicoPesquisaComponentquisaComponent implements OnInit {

  constructor(private wOrdemServicoService: WsOrdemServicoService) { }
  tabelaservico = [];
  ordemServico = new OrdemServico();

  ngOnInit() {
    this.pesquisar();
  }

  salvar(form: FormControl) {
    console.log(this.ordemServico);
  }

  pesquisar() {

    console.log('Iniciando');
    console.log();
    this.wOrdemServicoService.pesquisarOrdemServico().subscribe(tabelaservico => this.tabelaservico = tabelaservico);
  }




}
