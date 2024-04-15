import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';

const routes: Routes = [
  {
    path: 'listar-pensamentos',
    component: ListarPensamentosComponent
  },
  {
    path: '',
    redirectTo: '/listar-pensamentos',
    pathMatch: 'full'
  },
  {
    path: 'criar-pensamento',
    component: CriarPensamentosComponent
  },
  {
    path: 'pensamentos/exluir-pensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
  path: 'pensamento/editar-pensamento/:id',
  component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
