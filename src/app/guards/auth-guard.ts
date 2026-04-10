import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from "../services/user.service";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);

  console.log('Ejecutando AuthGuard...');

  if (userService.isAuth()) {
    console.log(`Acceso permitido a: ${state.url}`);
    return true;
  } else {
    console.log('Usuario no autenticado. Redirigiendo al login...');

    router.navigateByUrl('/login');
    return false;
  }
};