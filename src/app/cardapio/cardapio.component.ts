import { Component, OnInit } from '@angular/core';
import { Produto } from './produtos/produto.model';
import { CardapioService } from './cardapio.service';

@Component({
  selector: 'mt-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  produtos: Produto[]


  constructor(private cardapioService: CardapioService) { }

  ngOnInit() {
    this.produtos = this.cardapioService.cardapio()
  }

}
