import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private sa21cApiServer = 'http://api.sa21c.com'
  private apiServer = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  login(user) {
    const payload = new HttpParams()
      .set('login_id', user.login_id)
      .set('passwd', user.passwd);

    return this.httpClient.post(this.sa21cApiServer + '/user/login', payload)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  info(user) {
    // const payload = new HttpParams()
    //   .set('login_id', user.login_id)
    //   .set('uuid', user.uuid);

    // return this.httpClient.post(this.sa21cApiServer + '/user/info', payload)
    //   .pipe(
    //     catchError(this.errorHandler)
    //   )

    console.log("user - service", user)
    return this.httpClient.post(this.sa21cApiServer + '/user/info', JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )

  }

  create(user) {
    return this.httpClient.post(this.apiServer + '/users/', JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  findAll() {
    return this.httpClient.get(this.apiServer + '/users/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  findOne(id) {
    return this.httpClient.get(this.apiServer + '/users/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(user) {
    return this.httpClient.put(this.apiServer + '/users/', JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id) {
    return this.httpClient.delete(this.apiServer + '/users/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
