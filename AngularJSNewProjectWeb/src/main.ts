import {bootstrap} from "angular2/platform/browser";
import {MyApp} from "./app";
import {HTTP_PROVIDERS } from 'angular2/http'
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router'
bootstrap(MyApp, [ROUTER_BINDINGS, HTTP_PROVIDERS]);