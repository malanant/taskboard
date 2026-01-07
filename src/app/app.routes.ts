import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    },
    {
        path: 'about',
        loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule),
    },
    {
        path: 'tasks',
        loadChildren: () => import('./features/tasks/tasks.module').then(m => m.TasksModule),
    },
];
