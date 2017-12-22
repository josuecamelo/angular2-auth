import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { AlertModule } from 'ng2-bootstrap';

import routing from './app.routing'; //importanto rotas

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {LocalStorageService} from "./services/local-storage.service";
import {JwtTokenService} from "./services/jwt-token.service";
import { ProductListComponent } from './products/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    AlertModule.forRoot(),
    routing
  ],
  providers: [
    LocalStorageService,
    JwtTokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
