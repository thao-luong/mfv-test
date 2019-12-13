import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import { AuthenticationService } from './_services';
import { User } from './_models';
import { AppToolbarService, MenuItem } from './app-toolbar/app-toolbar.component';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentUser: User;
    mainMenuItems;
    activeMenuItem$: Observable<MenuItem>;

    constructor(
        private router: Router,
        private toolbarService: AppToolbarService
        // private authenticationService: AuthenticationService
    ) {
        // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.mainMenuItems = this.toolbarService.getMenuItems();
        this.activeMenuItem$ = this.toolbarService.activeMenuItem$;
    }
    logout() {
        // this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
