import { Component, OnInit } from '@angular/core';
import { ProductsapiService } from 'src/app/services/productsapi.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {

  responseData: any;
  constructor(private productService: ProductsapiService) { }

  ngOnInit(): void {
    // Subscribe actually instanciates the request
    this.productService.getProducts().subscribe((data) => {
      this.responseData = data;
      console.log(data)
    }, (err) => {
      throw err;
    })
  }

}
