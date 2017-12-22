import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {JwtTokenService} from "../../services/jwt-token.service";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Array<Object> = [];

  constructor(private http:Http, private jwtToken:JwtTokenService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
      this.http
          .get('http://localhost:8000/api/products')
          .toPromise()
          .then(response => this.products = response.json())
  }
}
