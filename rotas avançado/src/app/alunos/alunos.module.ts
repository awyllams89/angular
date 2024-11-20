import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosDeactivateGuard } from './guards/alunos-deactivate-guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe-resolver';
import { AlunosGuard } from './guards/alunos-guard';


@NgModule({
  declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule
  ],
  providers:[AlunosService, AlunosDeactivateGuard, AlunosGuard, AlunoDetalheResolver]
})
export class AlunosModule { }
