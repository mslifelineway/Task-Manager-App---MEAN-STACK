import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:3000/";
  }

  //get method
  get(uri: string) {
    return this.http.get(this.ROOT_URL + uri);
  }

  //post method
  post(uri: string, payload: Object) {
    return this.http.post(this.ROOT_URL + uri, payload);
  }

  //patch method
  patch(uri: string, payload: Object) {
    return this.http.patch(this.ROOT_URL + uri, payload);
  }

  //delete method
  delete(uri: string) {
    return this.http.delete(this.ROOT_URL + uri);
  }



}