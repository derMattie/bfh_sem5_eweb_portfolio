import { Routes } from '@angular/router';

export const routes: Routes = [
  // Errors
  //   { path: 'error404', component: ErrorPagenotfoundComponent },

  // Common Routes
  { path: '', redirectTo: '/tracks', pathMatch: 'full' }, // Redirects to /tracks as the default route
  { path: '**', redirectTo: '/error404', pathMatch: 'full' }, // Wildcard route for a 404 page, redirected to /artists
];
