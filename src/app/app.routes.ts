import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    data: { breadcrumb: '_home' }
  },
  {
    path: 'projects',
    loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent),
    data: { breadcrumb: '_projects' }
  },
  {
    path: 'about-me',
    loadComponent: () => import('./about-me/about-me.component').then(m => m.AboutMeComponent),
    data: { breadcrumb: '_about-me' }
  },
  {
    path: 'contact-me',
    loadComponent: () => import('./contact-me/contact-me.component').then(m => m.ContactMeComponent),
    data: { breadcrumb: '_contact-me' }
  }
];
