import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { User } from '../../models/user.model';

export function apiServiceCreator(http: HttpClient) {
  return new ApiService(http);
}

// endpoints que se saltan la autentificacion pass through
const passthrough = ['login', 'register'];

@Injectable()
export class ApiService {
  // Extending the HttpClient through the Angular DI.
  public constructor(public http: HttpClient) {}

  static buildUrl(path) {
    return ApiService.isBasePath(path) ? path : `${environment.apiPath}/${path}`;
  }

  static isBasePath(path) {
    return path.startsWith('http://') || path.startsWith('https://');
  }

  /**
   * GET request
   * @param {string} endPoint it doesn't need / in front of the end point
   * @param {string} token optional auth token
   * @returns {Observable}
   */
  public Get(endPoint: string, token?: string): Observable<any> {
    const apiUrl = ApiService.buildUrl(endPoint);
    const options: any = {};
    if (token) {
      options.headers = new HttpHeaders().set('Authorization', token);
    }
    return this.http.get(apiUrl, options);
  }

  /**
   * POST request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {string} token optional auth token
   * @returns {Observable}
   */
  public Post(endPoint: string, params, token?: string): Observable<any> {
    console.log(token);
    const apiUrl = ApiService.buildUrl(endPoint);

    const options: any = {};
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

    if (token) {
      headers['Authorization'] = token;
    }

    options.headers = new HttpHeaders(headers);
    return this.http.post(apiUrl, params, options);
  }

  /**
   * PUT request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @returns {Observable}
   */
  public Put(endPoint: string, params: object): Observable<any> {
    const apiUrl = ApiService.buildUrl(endPoint);
    const options = {};
    return this.http.put(apiUrl, params, options);
  }

  /**
   * DELETE request
   * @param {string} endPoint end point of the api
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable}
   */
  public Delete(endPoint: string): Observable<any> {
    const apiUrl = ApiService.buildUrl(endPoint);
    const options = {};
    return this.http.delete(apiUrl, options);
  }
}
