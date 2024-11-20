import { AlunosService } from './../alunos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  inscricao: Subscription;
  aluno: Aluno;
  constructor(private service: AlunosService,
    private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit(): void {
    console.log('ngOnit: AlunoDetalheComponent')

    this.inscricao = this.route.data.subscribe(
      (info)=>{
        console.log('recebendo o obj Aluno do Resolver')
        console.log(info);
        this.aluno = info['aluno'];
        console.log(this.aluno.id)

      }
    )
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar'],{})
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
