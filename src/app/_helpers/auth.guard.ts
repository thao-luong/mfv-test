import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '@app/_services';
import sdk from '@gooddata/gooddata-js';
import { projectId } from '../../utils/fixtures';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return sdk.user.isLoggedInProject(`${projectId}`)
            .then(() => {
                return true;
            })
            .catch(() => {
                this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                return false;
            });
    }
}
