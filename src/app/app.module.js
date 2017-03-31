"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_1 = require("./app.routing");
var angular2_jwt_1 = require("angular2-jwt");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home/home.component");
var profile_component_1 = require("./components/profile/profile.component");
var auth_service_1 = require("./services/auth.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_1.routing],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, profile_component_1.ProfileComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [app_routing_1.appRoutingProviders, angular2_jwt_1.AUTH_PROVIDERS, auth_service_1.Auth]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map