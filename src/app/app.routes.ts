
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
