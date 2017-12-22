/**
 * Created by josuecamelo on 21/12/17.
 */
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ModuleWithProviders} from "@angular/core";
import {ProductListComponent} from "./products/product-list/product-list.component";

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'products/list',
        component: ProductListComponent,
        //canActivate: [AuthGuardRouterService]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes)
export default routing;