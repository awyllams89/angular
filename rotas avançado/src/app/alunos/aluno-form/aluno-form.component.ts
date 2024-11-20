import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  id: number;
  inscricao: Subscription;
  aluno: any = {};
  private formMudou: boolean = false;
  constructor(private service: AlunosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any)=>{
        this.id = params['id']

        this.aluno = this.service.getAluno(this.id);

        if(this.aluno == null){
          this.aluno = {}
        }
      }
    )

  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
    console.log('mudou')
  }

  podeDesativar(){
    if(this.formMudou){
      confirm('Tem deseja que sair dessa página')
    }
    return true;
  }
}
