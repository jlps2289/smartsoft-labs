import { Routes } from '@angular/router';

// Constants
import { TITLE_PAGE_SUFFIX } from '@constants/app-info.constant';

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
		redirectTo: '',
	},
];
