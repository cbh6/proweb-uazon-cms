import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Http, Headers, ConnectionBackend, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

// endpoints que se saltan la autentificacion pass through
const passthrough = ['login', 'register'];

@Injectable()
export class ApiService extends Http {
  token = '';
  // provide como factory

  constructor(backend: ConnectionBackend, options: RequestOptions) {
    super(backend, options);
  }

  static buildUrl(path) {
    return ApiService.isBasePath(path) ? path : `${environment.apiPath}/${path}`;
  }

  static isBasePath(path) {
    return path.startsWith('http://') || path.startsWith('https://');
  }

  private toBody = (params: object): string => (params ? JSON.stringify(params) : '');

  private toQuery(params: object | any[], key: string = null, search = new URLSearchParams('')): URLSearchParams {
    if (params === undefined) {
      return search;
    }
    if (params instanceof Array && key) {
      // If it is an array, add brackets with the indexes: param[0]: value
      params.forEach((p, i) => (search = this.toQuery(p, `${key}[${i}]`, search)));
    } else if (params instanceof Object) {
      // If it is an object, add brackets wit the keys: param[key]: value
      Object.keys(params).forEach(
        objKey => (search = this.toQuery(params[objKey], key ? `${key}[${objKey}]` : objKey, search))
      );
    } else if (key) {
      // If the value is not an object nor and array, just append it with its key
      if (params === true) {
        // Transforming trues to 1
        search.append(key, '1');
      } else if (params === false) {
        // And falses to 0 (if necessary)
        search.append(key, '0');
      } else {
        search.append(key, params);
      }
    }
    return search;
  }

  get(url, params = {}) {
    const options: any = {};
    const apiUrl = ApiService.buildUrl(url);
    options.params = this.toQuery(params);
    if (passthrough.indexOf(url) === -1) {
      if (!this.token) {
        return Observable.throw({ message: 'Must login' });
      }
      options.headers = new Headers();
      options.headers.set('Authorization', `Bearer ${this.token || ''}`);
    }
    return super.get(apiUrl, options).map(res => res.json());
  }

  post(url, params = {}) {
    const apiUrl = ApiService.buildUrl(url);
    const body = this.toBody(params);

    const options: any = {};
    options.headers = new Headers();
    options.headers.set('Content-Type', 'application/x-www-form-urlencoded');

    if (passthrough.indexOf(url) === -1) {
      // firmamos
    }
    return super.post(apiUrl, body).map(res => res.json());
  }

  put(url, params = {}) {
    const apiUrl = ApiService.buildUrl(url);
    const body = this.toBody(params);
    if (passthrough.indexOf(url) === -1) {
      // firmamos
    }
    return super.put(apiUrl, body).map(res => res.json());
  }

  delete(url) {
    const apiUrl = ApiService.buildUrl(url);
    if (passthrough.indexOf(url) === -1) {
      // firmamos
    }
    return super.delete(apiUrl).map(res => res.json());
  }

  login(user: string, password: string) {
    this.post('login', { user, password }).do(res => (this.token = res.token));
  }
  logout() {
    this.post('logout').do(() => (this.token = ''));
  }
}
