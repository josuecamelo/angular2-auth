import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
//import {JwtTokenService} from "../../services/jwt-token.service";
import 'rxjs/add/operator/toPromise';
import {AuthService} from "../../services/auth.service";
import {DefaultRequestOptionsService} from "../../services/default-request-options.service";
import {JwtTokenService} from "../../services/jwt-token.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Array<Object> = [];

  //constructor(private http:Http, private jwtToken:JwtTokenService,
  constructor(private http:Http, private auth: AuthService, private requestOptions:DefaultRequestOptionsService,private jwtToken:JwtTokenService){
    //console.log(this.auth.check);
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
      /*let requestOptions = new RequestOptions();

      requestOptions.headers = new Headers();
      requestOptions.headers.set('Authorization', `Bearer ${this.jwtToken.token}`);
      requestOptions.headers.set('Content-Type', 'application/json');

      this.http
          .get('http://localhost:8000/api/products', requestOptions)
          .toPromise()
          .then(response => this.products = response.json())*/
    //refatorada
    this.http
        .get('http://localhost:8000/api/products', this.requestOptions.merge(new RequestOptions()))
        .toPromise()
        .then(response => this.products = response.json())
        .catch(responseError=>{
            if(responseError.status == '401'){
                this.http.post('http://localhost:8000/api/refresh_token', {}, this.requestOptions.merge(new RequestOptions()))
                    .toPromise()
                    .then(response => {
                        this.jwtToken.token = response.json().token;
                        this.http
                            .get('http://localhost:8000/api/products', this.requestOptions.merge(new RequestOptions()))
                            .toPromise()
                            .then(response=> this.products = response.json())
                    })
            }
        });
  }
}
