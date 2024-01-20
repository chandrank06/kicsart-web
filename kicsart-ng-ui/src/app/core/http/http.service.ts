import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}
  frameURL(apiURL: string) {
    return 'http://localhost:3000' + apiURL;
  }
  frameQueryParams(queryParam: object) {
    let queryStringParam = '';
    for (let [key, value] of Object.entries(queryParam)) {
      if (queryStringParam) {
        queryStringParam = queryStringParam + '&' + key + '=' + value;
      } else {
        queryStringParam = '?' + key + '=' + value;
      }
    }
    return queryStringParam;
  }
  getRequest(apiURL: string, queryParams: any) {
    apiURL = this.frameURL(apiURL) + this.frameQueryParams(queryParams);
    return this.httpClient.get(apiURL).pipe(
      map(res => {
        return res;
      })
    );
  }
  postRequest(apiURL: string, payLoad: object, queryParams: any) {
    apiURL = this.frameURL(apiURL) + this.frameQueryParams(queryParams);
    return this.httpClient.post(apiURL, payLoad).pipe(
      map(res => {
        return res;
      })
    );
  }
}
