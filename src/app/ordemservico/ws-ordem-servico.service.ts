import { OrdemServico } from './../core/model';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class WsOrdemServicoService {

  // ordemservicoURL = 'https://ws-marte-api.herokuapp.com/servico';

  ordemservicoURL = 'http://localhost:8080/servico';



  constructor(private http: Http) {

   //  this.cabecalho.append('Content-type', 'application/json');
    // this.cabecalho.append('Authorization', '');
  }

  pesquisarOrdemServico(): Observable<any> {

    return this.http.get(`${this.ordemservicoURL}`).pipe(map(res => res.json()));
  }



  // salvaChamado(ordemServico: OrdemServico) {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');

  //   console.log('Iniciando CREATE');
  //   console.log(headers);
  //   console.log(ordemServico);

  //   return this.http.post(`${this.ordemservicoURL}`, ordemServico, { headers } ).pipe(map(res => res.json()));

  // }

  adicionar(ordemServico: OrdemServico): Promise<OrdemServico> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.ordemservicoURL,
        JSON.stringify(ordemServico), { headers })
      .toPromise()
      .then(response => response.json());
  }



}
