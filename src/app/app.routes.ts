import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/home/home.component').then((m) => m.HomeComponent);
    },
  },

  {
    path: 'todo',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/todo/todo.component').then((m) => m.TodoComponent);
    },
  },
];
