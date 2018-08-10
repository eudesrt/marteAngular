import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WsOrdemServicoService {

  ordemservicoURL = 'http://localhost:8080/servico';

  constructor(private http: Http) { }

  pesquisar(): Promise<any> {
   return this.http.get(`${this.ordemservicoURL}`)
    .toPromise()
    .then(response => response.json().content);

  }
}
