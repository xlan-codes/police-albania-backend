import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/users', title: 'Users',  icon: 'education_atom', class: '' },
    { path: '/tracking-location', title: 'User Track Location',  icon: 'location_map-big', class: '' },
    { path: '/notifications', title: 'Notifications Sent',  icon: 'ui-1_bell-53', class: '' },

    { path: '/user-profile', title: 'Profile',  icon: 'users_single-02', class: '' },
    { path: '/admin-users', title: 'Admin User',  icon: 'users_single-02', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  }
}
