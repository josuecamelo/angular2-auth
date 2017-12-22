import {Injectable} from '@angular/core';
import {RequestOptions, RequestOptionsArgs, Headers} from "@angular/http";
import {JwtTokenService} from "./jwt-token.service";

@Injectable()
export class DefaultRequestOptionsService extends RequestOptions {

  constructor(private jwtToken:JwtTokenService) {
    super();
  }

  //fazendo override- faz merge entre configurações já existente e as que eu passar
  merge(options?: RequestOptionsArgs): RequestOptions {
    let headers = options.headers || new Headers();
    headers.set('Authorization', `Bearer ${this.jwtToken.token}`);
    headers.set('Content-Type', 'application/json');
    options.headers = headers;
    return super.merge(options);
  }
}
