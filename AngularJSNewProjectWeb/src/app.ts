import {Component} from "angular2/core"
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, Route} from 'angular2/router';
import {MyModel} from "./model"
import {UsersComponent} from "./users"

@Component({
    selector: `my-app`,
    templateUrl: './templates/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
        { path: '/users', component: UsersComponent, name: 'Users', useAsDefault: true }
])
export class MyApp {
    model = new MyModel();
}
