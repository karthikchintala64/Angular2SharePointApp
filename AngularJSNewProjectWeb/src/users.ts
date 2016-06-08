import { Component, OnInit } from 'angular2/core';
import { User } from './user'
import { UserService } from './userService'
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, Route, Router } from 'angular2/router';
import { Observable } from 'rxjs/Observable';


@Component({
    templateUrl: './templates/users.html',
    providers: [UserService]
})
export class UsersComponent implements OnInit {
    users: Observable<User[]>;
    selectedUserLogin: string;
    sincePrev: number;
    sinceNext: number;
    pageSize: number;

    constructor(private _userService: UserService, private _router: Router) { }

    ngOnInit() {
        this.users = this._userService.getUsers(0);
        this.pageSize = 10;
        this.sinceNext = this.pageSize;
    }
    goToDetail(login: string) {
        let link = ['UserDetails', { login: login }]
        this._router.navigate(link);
    }

    getUsersNext(sinceValue: number) {
        this.sincePrev = sinceValue - this.pageSize;
        this.sinceNext = sinceValue + this.pageSize;
        this.users = this._userService.getUsers(sinceValue);
    }

    getUsersPrev(sinceValue: number) {
        this.sincePrev = sinceValue - this.pageSize;
        this.sinceNext = sinceValue + this.pageSize;
        this.users = this._userService.getUsers(sinceValue);
    }
}