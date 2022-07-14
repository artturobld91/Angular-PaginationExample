import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { QueryFilterOptions } from 'src/app/interfaces/QueryFilterOptions';
import { ProductsapiService } from 'src/app/services/productsapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  pageRangeF = new FormControl('');
  nameF = new FormControl('');
  productsPaginated : any;
  page: number = 1;
  pageRange: number = 1;
  queryFilterOptions: QueryFilterOptions = { name: ''};
  pagesArray: any[] = [];

  constructor(private productService: ProductsapiService) { this.subscription = Subscription.EMPTY; }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.initializePagination(this.page, this.pageRange, this.queryFilterOptions);
  }

  filterByName()
  {
    this.queryFilterOptions.name = this.nameF.value;
    this.initializePagination(this.page, this.pageRange, this.queryFilterOptions);
  }

  updateRange()
  {
    this.pageRange = this.pageRangeF.value;
    this.initializePagination(this.page, this.pageRange, this.queryFilterOptions);
  }

  updatePage(pageUpdated:number)
  {
    this.page = pageUpdated;
    this.initializePagination(this.page, this.pageRange, this.queryFilterOptions);
  }

  initializePagination(page:number, pageRange:number, queryFilterOptions:QueryFilterOptions)
  {
    this.subscription = this.productService.getProductsPagination(page, pageRange, queryFilterOptions).subscribe((data) => {
      this.pagesArray = [];
      this.productsPaginated = data;
      console.log(data);
      for(let i=1; i<=this.productsPaginated.numberPages; i++)
      {
        this.pagesArray.push(i);
      }
      console.log(this.pagesArray);
    });
  }


}
