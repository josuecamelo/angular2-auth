import { Injectable } from '@angular/core';
import {JwtTokenService} from "./jwt-token.service";
import {Http} from "@angular/http";
import {LocalStorageService} from "./local-storage.service";

@Injectable()
export class AuthService {
  public check: Boolean = false;

  public user = {
    name: ''
  };

  constructor(private jwtToken: JwtTokenService,
              private http: Http,
              private localStorage: LocalStorageService) {
    this.check = this.jwtToken.token ? true : false;
  }

}
