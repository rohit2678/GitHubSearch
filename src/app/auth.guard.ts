import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchService } from './search.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{
    
    constructor(private search: SearchService, private activeRoute: Router){}

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(this.search.userFound){
            return true;
        }
        else{
            alert("Please Login First");
            this.activeRoute.navigateByUrl("");
            return false;
        }
    }
}