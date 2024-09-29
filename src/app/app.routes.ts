import { Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  // Routes
  { path: 'portfolio', component: PortfolioComponent },

  // Errors
  { path: 'error404', component: Error404Component },

  // Common Routes
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' }, // Redirects to /tracks as the default route
  { path: '**', redirectTo: '/error404', pathMatch: 'full' }, // Wildcard route for a 404 page, redirected to /artists
];
