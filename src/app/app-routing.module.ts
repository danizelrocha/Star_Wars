import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '' , redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
     import ('./page/home/home.module').then(m=>m.HomeModule)
  },
{
    path: 'eleicoes',
    loadChildren: () =>   /* A function that returns the module. */
     import ('./page/eleicoes/eleicoes.module').then(m=>m.EleicoesModule)
  },  
  {
    path: 'entretenimento',
    loadChildren: () =>   /* A function that returns the module. */
     import ('./page/entretenimento/entretenimento.module').then(m=>m.EntretenimentoModule)
  },
  {
    path: 'esporte',
    loadChildren: () =>   /* A function that returns the module. */
     import ('./page/esportes/esportes.module').then(m=>m.EsportesModule)
  },
  {
    path: 'enquete',
    loadChildren: () =>   /* A function that returns the module. */
     import ('./page/enquete/enquete.module').then(m=>m.EnqueteModule)
  },
  {
    path: 'han',
    loadChildren: () =>   /* A function that returns the module. */
     import ('./page/hanshow/hanshow.module').then(m=>m.HanshowModule)
     },
  {
    path: 'masterchef',
    loadChildren: () =>   /* A function that returns the module. */
     import ('./page/mastercheff/mastercheff.module').then(m=>m.MastercheffModule)
  },
  {
    path: 'noticias',
    loadChildren: () =>   /* A function that returns the module. */
     import ('./page/noticias/noticias.module').then(m=>m.NoticiasModule)
  },
  {
    path: 'obrigado',
    loadChildren: () =>   /* A function that returns the module. */
     import ('./page/obrigado/obrigado.module').then(m=>m.ObrigadoModule)
  },
  {
    path: 'racer',
    loadChildren: () =>   /* A function that returns the module. */
     import ('./page/podracers/podracers.module').then(m=>m.PodracersModule)
  },
  {
    path: 'programacao',
    loadChildren: () =>   /* A function that returns the module. */
     import ('./page/promocao/promocao.module').then(m=>m.PromocaoModule)
  },
  {
    path: 'receitas',
    loadChildren: () =>   /* A function that returns the module. */
     import ('./page/receitas/receitas.module').then(m=>m.ReceitasModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
