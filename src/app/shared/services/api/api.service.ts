import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

//endpoints que se saltan la autentificacion pass through
const passthrough = ['login', 'signup'];

@Injectable()
export class ApiService extends HttpClient {

    token: string = '';
    // provide como factory

  constructor() {
    super();
  }

  static buildUrl(path) {
    return ApiService.isBasePath(path)
      ? path
      : `${environment.apiPath}/${path}`;
  }
  static isBasePath(path) {
    return path.startsWith('https://') || path.startsWith('http://');
  }
  private toQuery(params, key, search) {
    //coger del codesandbox
  }
  private toBody(params){}
  private toJson(){}
  
  get(url, params = {}) {
    const apiUrl = ApiService.buildUrl(url);
    const query = this.toQuery(params);
    if(!passthrough.indexOf(url) === -1){
        //firmamos
        
    }
    return super.get(apiUrl, {params: query})
        .map(this.toJson);
  }
  post(url, params = {}) {
    const apiUrl = ApiService.buildUrl(url);
    const body = this.toBody(params);
    if(!passthrough.indexOf(url) === -1){
        //firmamos
    }
    return super.post(apiUrl, body)
        .map(this.toJson);
  }
  put(url, params) {
    const apiUrl = ApiService.buildUrl(url);
    const body = this.toBody(params);
    return super.put(apiUrl, body)
        .map(this.toJson);
  }
  delete(url, params) {
    const apiUrl = ApiService.buildUrl(url);
    return super.delete(apiUrl)
        .map(this.toJson);
  }

  login(user: string, password: string) {
      this.post('login', {user, password}).do(
          res => this.token = res.data.token;
      );
  }
}
