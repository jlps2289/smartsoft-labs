import { Routes } from '@angular/router';

// Constants
import { TITLE_PAGE_SUFFIX } from '@constants/app-info.constant';

// Views
import { PageNotFoundComponent } from '@views/page-not-found/page-not-found.component';

export const pageRoutes: Routes = [
	{
		path: '',
		loadComponent: () => import('./home/home.component'),
	},
	{
		path: 'import-csv',
		title: `Importar CSV ${TITLE_PAGE_SUFFIX}`,
		loadComponent: () => import('./import-csv/import-csv.component'),
	},
	{
		path: 'crud',
		title: `CRUD ${TITLE_PAGE_SUFFIX}`,
		loadComponent: () => import('./crud/crud.component'),
	},
	{
		path: '**',
		title: `Pagina no encontrada ${TITLE_PAGE_SUFFIX}`,
		component: PageNotFoundComponent,
	},
];
