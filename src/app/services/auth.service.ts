import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

declare var auth0Lock : any;
@Injectable()
export class AuthService {
    lock = new auth0Lock('H6km6ur9OnHghl4bSmgbY4DsNL5WDyfK', 'temilaj.auth0.com', {})
}