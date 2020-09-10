import { AdminUsersComponent } from '../../pages/admin-users/admin-users.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { UsersComponent } from '../../pages/users/users.component';
import { TrackingLocationComponent } from '../../pages/tracking-location/tracking-location.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'users',          component: UsersComponent },
    { path: 'tracking-location',           component: TrackingLocationComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'admin-users',  component: AdminUsersComponent },
];
