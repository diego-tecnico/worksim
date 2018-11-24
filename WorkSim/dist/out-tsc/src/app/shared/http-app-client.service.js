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
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/common/http");
var HttpAppClient = /** @class */ (function () {
    function HttpAppClient(http) {
        this.http = http;
        this.autorizationHeader = true;
    }
    // createAuthorizationHeader(headers: Headers) {
    //     if (!this.autorizationHeader) {
    //         return;
    //     }
    //     const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { token: null };
    //     if (currentUser.token) {
    //         headers.append('Authorization', `Bearer ${currentUser.token}`);
    //     }
    // }
    HttpAppClient.prototype.createApplicationJson = function (headers) {
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        //headers.append('Access-Control-Allow-Origin:', '*');
    };
    HttpAppClient.prototype.getHeaders = function () {
        var headers = new http_2.HttpHeaders();
        this.createApplicationJson(headers);
        // this.createAuthorizationHeader(headers);
        return headers;
    };
    HttpAppClient.prototype.get = function (url, data) {
        return this.http.get(url, {
            headers: this.getHeaders(),
            params: data
        });
    };
    HttpAppClient.prototype.put = function (url, data) {
        return this.http.put(url, data, {
            headers: this.getHeaders(),
            params: data
        });
    };
    HttpAppClient.prototype.post = function (url, data) {
        return this.http.post(url, data, {
            headers: this.getHeaders()
        });
    };
    HttpAppClient.prototype.downloadByPost = function (url, data) {
        var _this = this;
        var headers = new http_2.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return this.http.post(url, data, {
            headers: this.getHeaders(),
            responseType: "blob",
            observe: 'response'
        }).map(function (response) {
            var contentDisposition = response.headers.get('content-disposition');
            var fileName = _this.getFileNameFromContentDispostion(contentDisposition);
            _this.downloadFile(response.body, fileName);
            return response;
        });
    };
    HttpAppClient.prototype.getFileNameFromContentDispostion = function (disposition) {
        var filename = "";
        if (disposition && disposition.indexOf('attachment') !== -1) {
            var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
            var matches = filenameRegex.exec(disposition);
            if (matches != null && matches[1]) {
                filename = matches[1].replace(/['"]/g, '');
            }
        }
        return filename;
    };
    HttpAppClient.prototype.downloadFile = function (blob, fileName) {
        // var url= window.URL.createObjectURL(blob, op );
        // window.open(url);
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
    };
    HttpAppClient.prototype.delete = function (url, data) {
        return this.http.delete(url, {
            headers: this.getHeaders(),
            params: data
        });
    };
    HttpAppClient = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpAppClient);
    return HttpAppClient;
}());
exports.HttpAppClient = HttpAppClient;
//# sourceMappingURL=http-app-client.service.js.map