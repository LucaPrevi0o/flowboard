import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { PRODUCTS_MOCK } from "../mocks/product.mock";
import { Observable, of, delay } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    list(): Observable<Product[]> {
        // Simula una chiamata HTTP con un ritardo di 500ms
        return of(PRODUCTS_MOCK).pipe(delay(500));
    }
}