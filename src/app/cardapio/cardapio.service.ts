import { Produto } from "./produtos/produto.model";
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import { ErrorHandle } from "app/app.error-handle";

@Injectable()
export class CardapioService {


    constructor(private http: HttpClient){}

    cardapio(): Observable<Produto[]> {
        return this.http.get<Produto[]>(`${MEAT_API}/cardapio`)
        .catch(ErrorHandle.handleError)
    }



    }
