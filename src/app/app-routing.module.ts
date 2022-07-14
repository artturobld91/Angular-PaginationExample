import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductsComponent } from './products/home-products/home-products.component';
import { ProductsComponent } from './pagination/products/products.component';

const routes: Routes = [ 
  { path: 'ProductsHome', component: HomeProductsComponent },
  { path: 'Products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
