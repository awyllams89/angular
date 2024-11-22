import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) {   }

  salvarPessoa(dados: any){
    this.http.post('https://jsonplaceholder.typicode.com/posts', dados)
      .subscribe(
        response => {
          console.log('Resposta do servidor:', response);
        },
        error => {
          console.error('Erro ao enviar o formulário:', error);
        }
      );
  }
}
