import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpClient {
    constructor(private http: Http) {
    }

    createAuthorizationHeader(headers: Headers) {

        if (!this.autorizationHeader) {
            return;
        }

        const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { token: null };

        if (currentUser.token) {
            headers.append('Authorization', `Bearer ${currentUser.token}`);
        }
    }

    createApplicationJson(headers: Headers) {
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
    }

    autorizationHeader = true;

    getHeaders(): Headers {
        const headers = new Headers();
        this.createApplicationJson(headers);
        this.createAuthorizationHeader(headers);
        return headers;
    }

    get(url) {
        return this.http.get(url, {
            headers: this.getHeaders()
        });
    }

    post(url, data) {
        return this.http.post(url, data, {
            headers: this.getHeaders()
        });
    }
}