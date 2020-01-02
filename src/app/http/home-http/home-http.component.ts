import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-http',
  templateUrl: './home-http.component.html',
  styleUrls: ['./home-http.component.css']
})
export class HomeHttpComponent implements OnInit {
  apiRoot = 'http://httpbin.org/';
  constructor(private http: HttpClient) { }
  page = 10;
  ngOnInit() {
  }
  doGET() {
    console.log('GET');
    const url = `${this.apiRoot}/get`;
    // const params = new HttpParams().set('key', 'value').set('limit', '25');
    const httpOptions = {
      params: new HttpParams().append('search', 'this.page').append('limit', '25').set('query', '5')
    };
    this.http.get(url, httpOptions).subscribe(
      res => {
        console.log(res);
      });
  }

  doPOST() {
    console.log('POST');
    const url = `${this.apiRoot}/post`;
    const httpOptions = {
      params: new HttpParams().append('search', 'item').append('limit', '25').set('query', '5')
    };
    this.http.post(url, { name: 'limon', password: 'password' }, httpOptions).subscribe(observe => {
      console.log(observe);
    });
  }

  doPUT() {
    console.log('PUT');
    const url = `${this.apiRoot}/put`;
    const httpOptions = {
      params: new HttpParams().append('put', 'update').append('limit', '25').set('id', '5')
    };
    this.http.put(url, { name: 'limon', password: 'password' }, httpOptions).subscribe(observe => {
      console.log(observe);
    });
  }

  doDELETE() {
    console.log('DELETE');
    const url = `${this.apiRoot}/delete`;
    const params = new HttpParams().append('search', 'iteam').append('limit', '25').set('query', '5');
    const options = {
      headers: new HttpHeaders().set('search', 'product').set('limit', '25').set('page', '5'),
      params: new HttpParams().append('search', 'iteam').append('limit', '25').set('query', '5')
    };
    this.http.delete(url, options).subscribe(
      res => {
        console.log(res);
      });
  }

  doGETAsPromise() {
    console.log('GET AS PROMISE');
    const url = `${this.apiRoot}/get`;
    this.http.get(url).toPromise().then(
      res => {
        console.log(res);
      });
  }

  doGETAsPromiseError() {
    console.log('GET AS PROMISE ERROR');
    const url = `${this.apiRoot}/post`;
    this.http.get(url).toPromise().then(
      res => {
        console.log(res);
      }, mess => {
        // console.error(`Error:${mess.status} ${mess.statusText}`);
        console.log(mess);
      }).catch(err => {// catch not work
        console.log(err);
      });
  }

  doGETAsObservableError() {
    console.log('GET AS OBSERVABLE ERROR');
    const url = `${this.apiRoot}/post`;
    this.http.get(url).subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

  doGETWithHeaders() {
    console.log('GET WITH HEADERS');
    const url = `${this.apiRoot}/get`;
    const headers = new HttpHeaders().append('Authorization', btoa('username:password'));

    this.http.get(url, { headers }).subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

}
