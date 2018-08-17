import { OrdemServico } from './../core/model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { fromEventPattern } from '../../../node_modules/rxjs';

@Injectable()
export class WsOrdemServicoService {

  // ordemservicoURL = 'https://ws-marte-api.herokuapp.com/servico';

  ordemservicoURL = 'http://localhost:8080/servico';

  constructor(private http: Http) {
  }

  pesquisarOrdemServico(): Observable<any> {

    return this.http.get(`${this.ordemservicoURL}`).pipe(map(res => res.json()));
  }


/*
  addchamado(ordemServico: OrdemServico): Observable<OrdemServico> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<OrdemServico>(this.ordemservicoURL, ordemServico, httpOptions).pipe(
      catchError(this.handleError('criar', ordemServico)
    ));



  } */

}
