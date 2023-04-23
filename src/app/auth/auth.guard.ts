import {ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export const authGuard: (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => void = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn) {
    return true;
  }
  return router.parseUrl('/login');
}


