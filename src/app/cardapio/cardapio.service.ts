import { Produto } from "./produtos/produto.model";

export class CardapioService {

    prods: Produto[] = [
        {
            id: "bread-bakery",
            nome: "Bread & Bakery",
            preco: 2.00,
            descricao: "Ótima tapiok",
            avaliacao: 4.9,
            imagePath: "assets/img/restaurants/breadbakery.png"
        }
    ]

    constructor(){}

    cardapio(): Produto[] {
        return this.prods;
    }



    }
