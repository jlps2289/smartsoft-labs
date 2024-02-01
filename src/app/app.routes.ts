import { Routes } from '@angular/router';

// Routes
import { pageRoutes } from '@app/pages/pages.routes';

export const routes: Routes = [
	{
		path: 'login',
		title: 'Iniciar sesión',
		loadComponent: () => import('./login/login.component'),
	},
	{
		path: 'app',
		title: 'Bienvenido',
		loadComponent: () => import('./pages/pages-layout.component'),
		children: [...pageRoutes],
	},
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	/* todo: [Front] Jose Luis Parra [2024-01-31 18:52:09] Create page no found view. */
	{
		path: '**',
		redirectTo: 'login',
	},
];
