import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/serve-resolver.service';

const appRotes: Route[] = [
    { path: '', component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id/:name', component: UserComponent },
        ]
    },
    {
        path: 'servers',
        component: ServersComponent,
        // canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
            { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
        ]
    },
    {
        path: 'not-found', component: PageNotFoundComponent
    },
    {
        path: 'error', component: ErrorPageComponent, data: {message: 'Page not found !'}
    },
    {
        path: '**', redirectTo: 'error'
    }
];
@NgModule({
    /** ! this useHash is used to add # in the Url is Server is not supporting latest routing
     need to use this Hash **/
    // imports: [RouterModule.forRoot(appRotes, {useHash: true})],
    imports: [RouterModule.forRoot(appRotes)],

    exports: [RouterModule]
})
export class AppRoutingModule {

}
