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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var OAuthLoginService = /** @class */ (function () {
    function OAuthLoginService(_http) {
        this._http = _http;
    }
    OAuthLoginService.prototype.ObterToken = function (user) {
        var url = 'https://login-api.sajadv.com.br/adv-bouncer-authorization-server/oauth/token';
        var header = new http_1.Headers();
        header.append('Content-type', 'application/x-www-form-urlencoded');
        header.append('Authorization', 'Basic YXBpX2NsaWVudGVfY29kaWdvXzE2MTE4OkAyMDE4QDM1ZjNmZWI0M2U2ZjRmY2ZiNmNkNGY0Y2Q5NTQ5OTlj');
        var urlEncoded = "grant_type=password&username=" + user.email + "%24%24dassad-dasdsafdsf&password=" + user.senha;
        return this._http
            .post(url, urlEncoded, { headers: header })
            .map(function (result) { return result.json(); });
    };
    OAuthLoginService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], OAuthLoginService);
    return OAuthLoginService;
}());
exports.OAuthLoginService = OAuthLoginService;
//# sourceMappingURL=oauth-login.service.js.map