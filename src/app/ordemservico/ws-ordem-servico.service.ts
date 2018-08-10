import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
import { fromEventPattern } from '../../../node_modules/rxjs';

@Injectable()
export class WsOrdemServicoService {

  ordemservicoURL = 'https://ws-marte-api.herokuapp.com/servico';


  constructor(private http: Http) {
  }

  pesquisarOrdemServico(): Observable<any> {

    return this.http.get(`${this.ordemservicoURL}`).pipe(map(res => res.json()));
  }
}
