import {Injectable} from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpAppClient {

    autorizationHeader = true;

    constructor(private http: HttpClient) {
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

    createApplicationJson(headers: HttpHeaders) {
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        //headers.append('Access-Control-Allow-Origin:', '*');
    }

    getHeaders(): HttpHeaders {
        const headers = new HttpHeaders();
        this.createApplicationJson(headers);
        // this.createAuthorizationHeader(headers);
        return headers;
    }

    get(url, data?) {
        return this.http.get(url, {
            headers: this.getHeaders(),
            params: data
        });
    }

    put(url, data?) {
      return this.http.put(url, data,{
        headers: this.getHeaders(),
        params: data
      });
    }

    post(url, data?) {
        return this.http.post(url, data, {
            headers: this.getHeaders()
        });
    }

    downloadByPost(url, data) {
      const headers = new HttpHeaders();

      headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

      return this.http.post(url, data, {
          headers: this.getHeaders(),
          responseType: "blob",
          observe: 'response'
      }).map( (response) => {
        var contentDisposition= response.headers.get('content-disposition');
        var fileName = this.getFileNameFromContentDispostion(contentDisposition);
        this.downloadFile(response.body, fileName);
        return response;
      });
  }

  getFileNameFromContentDispostion(disposition: string){
    var filename = "";
    if (disposition && disposition.indexOf('attachment') !== -1) {
        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        var matches = filenameRegex.exec(disposition);
        if (matches != null && matches[1]) {
          filename = matches[1].replace(/['"]/g, '');
        }
    }
    return filename;
  }

  downloadFile(blob: Blob, fileName: string){
    // var url= window.URL.createObjectURL(blob, op );
    // window.open(url);
    var link=document.createElement('a');
    link.href=window.URL.createObjectURL(blob);
    link.download=fileName;
    link.click();
  }

    delete(url, data?) {
      return this.http.delete(url, {
        headers: this.getHeaders(),
        params: data
      });
    }

}
