import { FooterComponent } from './core/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './page/home/home.component';
import { NoticiasComponent } from './page/noticias/noticias.component';
import { EsportesComponent } from './page/esportes/esportes.component';
import { NavComponent } from './core/nav/nav.component';
import { EntretenimentoComponent } from './page/entretenimento/entretenimento.component';
import { ReceitasComponent } from './page/receitas/receitas.component';
import { HanshowComponent } from './page/hanshow/hanshow.component';
import { PodracersComponent } from './page/podracers/podracers.component';
import { EleicoesComponent } from './page/eleicoes/eleicoes.component';
import { MastercheffComponent } from './page/mastercheff/mastercheff.component';
import { PromocaoComponent } from './page/promocao/promocao.component';
import { EnqueteComponent } from './page/enquete/enquete.component';
import { ObrigadoComponent } from './page/obrigado/obrigado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NoticiasComponent,
    EsportesComponent,
    NavComponent,
    EntretenimentoComponent,
    ReceitasComponent,
    HanshowComponent,
    PodracersComponent,
    EleicoesComponent,
    MastercheffComponent,
    PromocaoComponent,
    EnqueteComponent,
    ObrigadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
