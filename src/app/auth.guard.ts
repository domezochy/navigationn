import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  //const router = new Router;
  const token = localStorage.getItem("token");
  const router = inject(Router);


  console.log(route);
  console.log(state);
  console.log("token", token);

  if(token){
    return true;
  }else {
    router.navigate(['login'])
    return false;
    }
};
