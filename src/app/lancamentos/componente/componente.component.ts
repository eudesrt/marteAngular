import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent {

  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2015, 5, 30),
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date('2016, 04, 01'),
      dataPagamento: new Date('2016, 10,20'), valor: 80000, pessoa: 'Atacado Brasil' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date('2018, 02, 22'),
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda' },
    { tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: new Date('2018, 03, 05'),
      dataPagamento: new Date('2016, 10,20'), valor: 800, pessoa: 'Escola Abelha Rainha' },
    { tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date('2016, 10,20'),
      dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza' },
    { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date('2015,02,01'),
      dataPagamento: new Date('2016, 10,20'), valor: 1750, pessoa: 'Casa Nova Imóveis' },
    { tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date('2013,10,02'),
      dataPagamento: null, valor: 180, pessoa: 'Academia Top'
    }
  ];

}
