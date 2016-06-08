"use strict";
var browser_1 = require("angular2/platform/browser");
var app_1 = require("./app");
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
browser_1.bootstrap(app_1.MyApp, [router_1.ROUTER_BINDINGS, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map