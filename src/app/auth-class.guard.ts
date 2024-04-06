import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthClassGuard implements CanActivate {
  
  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const token = localStorage.getItem("token");
    //const router = inject(Router);
    console.log(route);
    console.log(state);

    console.log("token", token);

    if (token) {
      return true;
    } else {
      this.router.navigate(['login'])
      return false;
    }
    return true;
  }

}
