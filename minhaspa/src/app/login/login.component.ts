import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
//import {LocalStorageService} from "../services/local-storage.service";
import {JwtTokenService} from "../services/jwt-token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  redirectAfterLogin = ['/products/list'];

  //constructor(private http:Http, private localStorage: LocalStorageService) {
  constructor(private http:Http, private jwtToken:JwtTokenService, private router: Router) {
    //this.localStorage.set('nome', 'Josué').set('curso', 'angular 2');

    /*console.log(this.localStorage.get('nome'));
    console.log(this.localStorage.get('curso'));
    console.log(this.localStorage.get('nada'));
    this.localStorage.setObject('obj', {nome: 'Josué', idade: 31});
    console.log(window.localStorage.getItem('obj1'));
    console.log(this.localStorage.getObject('obj1'));

    this.localStorage.remove('nome').remove('curso');*/

  }

  ngOnInit() {
  }

  login(){
    this.http
        .post('http://localhost:8000/api/login', this.user).toPromise()
        .then(response => {
          this.jwtToken.token = response.json().token;
          this.router.navigate(this.redirectAfterLogin);
        });
  }
}