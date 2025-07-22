import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  {
    path: '',
    component: App,
  },
  {
    path: 'inherit',
    loadChildren: () =>
      import('./features/inherit/inherit.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
