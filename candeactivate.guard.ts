import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandeactivateGuard implements CanDeactivate<unknown> {
  canDeactivate(): boolean {
    return window.confirm("Are you sure you want to navigate");
      }
    }
    
  

