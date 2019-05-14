import { Component, OnInit, Input } from '@angular/core';
import { Produto } from './produto.model';

@Component({
  selector: 'mt-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  @Input () produto: Produto

  constructor() { }

  ngOnInit() {
  }

}
