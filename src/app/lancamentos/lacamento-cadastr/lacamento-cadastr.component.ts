import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lacamento-cadastr',
  templateUrl: './lacamento-cadastr.component.html',
  styleUrls: ['./lacamento-cadastr.component.css']
})
export class LacamentoCadastrComponent implements OnInit {

  tipos = [
    {label: 'Receita'   ,  value: 'RECEITA' },
    {label: 'Despessa'  , value: 'DESPESA' }
  ];

  categorias = [
    {label : 'Alimentação'  , value: 1 },
    {label : 'Transporte'   , value: 2 }
  ];

  pessoas = [
    {label: 'Rafael Eudes'      , value: 1 },
    {label: 'Matistela Zicatti' , value: 2 },
    {label: 'Selma Maria'       , value: 3 }
  ];


  constructor() { }

  ngOnInit() {
  }

}
