import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'

export const roleGuard: CanActivateFn = (route, state) => {
  
  //constructor(private router: Router){}
  const router = inject(Router);

  const role = route.data['role'];
  if(role === 'ADMIN'){
  return true;
  }else{
    router.navigate(['login']);
    return false;

  }
  return true;
};
