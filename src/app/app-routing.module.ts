import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { CardapioComponent } from './cardapio/cardapio.component';
import { DetalhesProdutosComponent } from './detalhes-produtos/detalhes-produtos.component';
import { MenuComponent } from './detalhes-produtos/menu/menu.component';
import { AvaliacoesComponent } from './detalhes-produtos/avaliacoes/avaliacoes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cardapio', component: CardapioComponent},
  {path: 'cardapio/:id', component: DetalhesProdutosComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'avaliacoes', component: AvaliacoesComponent}
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  
  exports: [ RouterModule ]
})
export class AppRoutingModule { 

}
