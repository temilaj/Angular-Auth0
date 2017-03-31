import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Auth } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private auth: Auth, private router: Router){

    }

    CanActivate(next: ActivatedRouteSnapshot, state:RouterStateSnapshot){
        if(this.auth.authenticated){
            console.log('Auth Guard Activated');
            return true;
        }
        else{
            console.log('BLOCKED BY AUTH GUARD');
            this.router.navigate(['/']);
            return false;
        }

    }
}