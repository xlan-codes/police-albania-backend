
import { AdminUsersComponent } from '../../pages/admin-users/admin-users.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UsersComponent } from '../../pages/users/users.component';
import { TrackingLocationComponent } from '../../pages/tracking-location/tracking-location.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    // tslint:disable-next-line: max-line-length
    { path: 'user-profile',   loadChildren: () => import('./../../pages/user-profile/user-profile.module').then((m) => m.UserProfileModule) },
    { path: 'users',          component: UsersComponent },
    { path: 'tracking-location',           component: TrackingLocationComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'admin-users',  component: AdminUsersComponent },
];
