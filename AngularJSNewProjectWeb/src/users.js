"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var userService_1 = require('./userService');
var router_1 = require('angular2/router');
var UsersComponent = (function () {
    function UsersComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.users = this._userService.getUsers(0);
        this.pageSize = 10;
        this.sinceNext = this.pageSize;
    };
    UsersComponent.prototype.goToDetail = function (login) {
        var link = ['UserDetails', { login: login }];
        this._router.navigate(link);
    };
    UsersComponent.prototype.getUsersNext = function (sinceValue) {
        this.sincePrev = sinceValue - this.pageSize;
        this.sinceNext = sinceValue + this.pageSize;
        this.users = this._userService.getUsers(sinceValue);
    };
    UsersComponent.prototype.getUsersPrev = function (sinceValue) {
        this.sincePrev = sinceValue - this.pageSize;
        this.sinceNext = sinceValue + this.pageSize;
        this.users = this._userService.getUsers(sinceValue);
    };
    UsersComponent = __decorate([
        core_1.Component({
            templateUrl: './templates/users.html',
            providers: [userService_1.UserService]
        }), 
        __metadata('design:paramtypes', [userService_1.UserService, router_1.Router])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.js.map