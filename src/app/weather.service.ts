import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  private url = 'https://api.darksky.net/forecast/3bfcfdfa160eee3357357a6c3c400e6d/50.401699,30.252512?units=ca';

  constructor (private http: Http) {}

  getWeather(): Observable<any[]> {
    console.log('1st line of HeroService.getData()');
    return this.http.get(this.url)
      .map((res) => {return res.json(); })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
