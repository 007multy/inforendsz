import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }
    loadProducts(): Observable<Product[]>{
      return this.http.get<Product[]>("https://github.com/aron123/infosystems-20-21-II/blob/week03/products-json/products.json")
    }
}