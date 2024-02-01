import { Routes } from '@angular/router';

// Routes
import { pageRoutes } from '@app/pages/pages.routes';

// Constants
import { TITLE_PAGE_SUFFIX } from '@constants/app-info.constant';

// Views
import { PageNotFoundComponent } from '@views/page-not-found/page-not-found.component';

export const routes: Routes = [
	{
		path: 'login',
		title: `Iniciar Sesión ${TITLE_PAGE_SUFFIX}`,
		loadComponent: () => import('./login/login.component'),
	},
	{
		path: 'app',
		title: `Bienvenido ${TITLE_PAGE_SUFFIX}`,
		loadComponent: () => import('./pages/pages-layout.component'),
		children: [...pageRoutes],
	},
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{
		path: '**',
		title: `Pagina no encontrada ${TITLE_PAGE_SUFFIX}`,
		component: PageNotFoundComponent,
	},
];
