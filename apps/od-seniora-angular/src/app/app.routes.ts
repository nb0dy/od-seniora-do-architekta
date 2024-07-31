import { Route } from '@angular/router';

import { EmptyRouteComponent } from './empty-route.component';
import { HomeComponent } from './home.component';

export const appRoutes: Route[] = [
  { path: '/', component: HomeComponent },
  { path: '**', component: EmptyRouteComponent },
];
