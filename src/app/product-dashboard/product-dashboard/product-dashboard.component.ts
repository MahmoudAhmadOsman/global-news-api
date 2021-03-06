import { ProductService } from './../../services/product.service';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {


  public products = [];
  public loading = true;
  public errorMessage = "Unable to fetch products";

  constructor(private productService: ProductService) {

    productService.getAllProducts().subscribe(data => {
      console.log("Products Data", data)

      this.products = data
      this.loading = false;


    }, (error) => {
      this.errorMessage = error;
      this.loading = true;
      console.log("An Error has occurred: ", error)
    })

  }

  ngOnInit(): void {
  }

}
