// import { Injectable } from '@angular/core';
// import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import { map } from 'rxjs/operators';
//
// import { environment } from "../../environments/environment";
//
// @Injectable()
//
// export class GetService {
//
//   private currentUidURL = environment.currentUidURL;
//   private uid : String = "";
//   // constructeur ...
//   constructor(private httpClient : HttpClient) { }
//
//
//   getRequest(url) {
//     return this.httpClient.get<String>(url)
//     .subscribe(
//          response => {
//            this.uid = response.uid
//            callback(uid, url);
//
//          }, error => {
//
//          });
//   }
// }
