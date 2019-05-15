import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { CardapioComponent } from './cardapio/cardapio.component';
import { ProdutosComponent } from './cardapio/produtos/produtos.component'
import { CardapioService } from './cardapio/cardapio.service';
import { DetalhesProdutosComponent } from './detalhes-produtos/detalhes-produtos.component';
import { MenuComponent } from './detalhes-produtos/menu/menu.component';
import { CarrinhoComponent } from './detalhes-produtos/carrinho/carrinho.component';
import { MenuItemComponent } from './detalhes-produtos/menu-item/menu-item.component';
import { AvaliacoesComponent } from './detalhes-produtos/avaliacoes/avaliacoes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    CardapioComponent,
    ProdutosComponent,
    DetalhesProdutosComponent,
    MenuComponent,
    CarrinhoComponent,
    MenuItemComponent,
    AvaliacoesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [CardapioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
