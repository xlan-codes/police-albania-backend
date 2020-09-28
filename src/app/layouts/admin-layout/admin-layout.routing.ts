
import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    // tslint:disable-next-line: max-line-length
    { path: 'user-profile', loadChildren: './../../pages/user-profile/user-profile.module#UserProfileModule' },
    { path: 'users', loadChildren: './../../pages/users/users.module#UserModule' },
    { path: 'tracking-location', loadChildren: './../../pages/tracking-location/tracking-location.module#TrackingLocationModule' },
    { path: 'notifications',  loadChildren: './../../pages/notifications/notifications.module#NotificationsModule' },
    { path: 'admin-users',  loadChildren: './../../pages/admin-users/admin-user.module#AdminUserModule' },
];

