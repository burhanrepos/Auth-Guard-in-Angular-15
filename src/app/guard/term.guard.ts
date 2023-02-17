import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TermComponent } from '../components/term/term.component';

@Injectable({
  providedIn: 'root'
})
export class TermGuard implements CanDeactivate<TermComponent> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(window.confirm('Hope you read all terms carefully...'))
      {
        return true;
      }
      return false;
  }
  
}
