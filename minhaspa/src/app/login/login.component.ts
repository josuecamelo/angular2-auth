import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {LocalStorageService} from "../services/local-storage.service";

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

  constructor(private http:Http, private localStorage: LocalStorageService) {
    this.localStorage.set('nome', 'Josué').set('curso', 'angular 2');

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
        .then(response =>console.log(response));
  }
}