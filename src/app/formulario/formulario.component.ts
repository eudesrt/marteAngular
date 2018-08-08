import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

class Cliente {
  nome: String;
  email: String;
  profissao: String;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

    cliente = new Cliente();

    profissoes = ['Programador', 'Empresario', 'Outra'];
    profissao  = 'XXX';

  salvar(form: NgForm) {
    // this.cliente.nome = form.value.nome;
    // this.cliente.email = form.value.email;
    // this.cliente.profissao = form.value.profissao;

    console.log(form.value);
    console.log(this.cliente);

  }

}
