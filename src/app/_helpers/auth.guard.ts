import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '@app/_services';
import sdk from '@gooddata/gooddata-js';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return sdk.user.isLoggedInProject("ht3owbpk6h0yfjtkcsgva3osu3z7paol")
            .then(() => {
                debugger
                return true;
            })
            .catch(() => {
                debugger
                this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                return false;
            });
    }
}
