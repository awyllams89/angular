import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';


@NgModule({
  declarations: [
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
    CursosComponent

  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  providers:[CursosService]
})
export class CursosModule { }
