import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunosDeactivateGuard } from './guards/alunos-deactivate-guard';
import { AlunosGuard } from './guards/alunos-guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe-resolver';

const routes: Routes = [
  {path:'', component: AlunosComponent,
    canActivateChild:[AlunosGuard],
    children:[
    {path:'novo', component: AlunoFormComponent},
    {path:':id', component: AlunoDetalheComponent, resolve:{aluno: AlunoDetalheResolver}},
    {path:':id/editar', component: AlunoFormComponent,
      canDeactivate:[AlunosDeactivateGuard]
    },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
