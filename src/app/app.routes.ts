import { Routes } from '@angular/router';

// Routes
import { pageRoutes } from '@app/pages/pages.routes';

// Constants
import { TITLE_PAGE_SUFFIX } from '@constants/app-info.constant';

// Services
import { authGuard } from '@services/guards/auth.guard';
import { unAuthGuard } from '@services/guards/un-auth.guard';

// Views
import { PageNotFoundComponent } from '@views/page-not-found/page-not-found.component';

export const routes: Routes = [
	{
		path: 'login',
		title: `Iniciar sesión ${TITLE_PAGE_SUFFIX}`,
		loadComponent: () => import('./login/login.component'),
		canActivate: [unAuthGuard],
	},
	{
		path: 'app',
		title: `Bienvenido ${TITLE_PAGE_SUFFIX}`,
		loadComponent: () => import('./pages/pages-layout.component'),
		canActivateChild: [authGuard],
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
