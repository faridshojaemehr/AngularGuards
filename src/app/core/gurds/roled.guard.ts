import { CanActivateFn } from '@angular/router';

export const roledGuard: CanActivateFn = (route, state) => {
  return isAuthorized(route, state);
};

const isAuthorized: CanActivateFn = (route, state) => {
  const roles = ['Admin', 'Manager'];
  const expectedRoles = route.data['expectedRole'];
  const roleMatchs = roles.findIndex(
    (role) => expectedRoles.indexOf(role) !== -1
  );
  return roleMatchs < 0 ? false : true;
};
