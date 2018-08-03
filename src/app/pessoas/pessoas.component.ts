import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent {

  pessoas = [
    { nome: 'Rafael Tavares', cidade: 'SAO PAULO', estado: '30/06/2017', ativo: true },
    { nome: 'Paulo Eudes', cidade: 'SAO CAETANO', estado: '12/04/2018', ativo: false },
    { nome: 'Stela FREIRE', cidade: 'SAO PAULO', estado: '1/03/2013', ativo: false },
    { nome: 'Rogerio BRAGA', cidade: 'CAMPINAS', estado: '15/06/2012', ativo: false },
    { nome: 'Maria SILVA', cidade: 'RIO DE JANEIRO', estado: '12/03/2017', ativo: true }

  ];

}
