import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { QueryFilterOptions } from '../interfaces/QueryFilterOptions';

@Injectable({
  providedIn: 'root'
})
export class ProductsapiService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get('https://localhost:7111/api/Products/GetAllProducts'); // This returns an observable
  }

  getProductsPagination(page:number, pageRange:number, queryFilterOptions:QueryFilterOptions) {
      return this.httpClient.get('https://localhost:7111/api/Products/GetProductsPagination', 
      { headers: { 'Page' : page.toString(), 'PageRange' : pageRange.toString() }, params: { name : queryFilterOptions.name} }
      );
  }
}
