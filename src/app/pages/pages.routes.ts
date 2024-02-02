import { Routes } from '@angular/router';

// Constants
import { TITLE_PAGE_SUFFIX } from '@constants/app-info.constant';

// Views
import { BuildingComponent } from '@views/building/building.component';
import { PageNotFoundComponent } from '@views/page-not-found/page-not-found.component';

export const pageRoutes: Routes = [
	{
		path: '',
		loadComponent: () => import('./home/home.component'),
	},
	{
		path: 'import-csv',
		title: `Importar CSV ${TITLE_PAGE_SUFFIX}`,
		// loadComponent: () => import('./import-csv/import-csv.component'),
		component: BuildingComponent,
	},
	{
		path: 'crud',
		title: `CRUD ${TITLE_PAGE_SUFFIX}`,
		// loadComponent: () => import('./crud/crud.component'),
		component: BuildingComponent,
	},
	{
		path: '**',
		title: `Pagina no encontrada ${TITLE_PAGE_SUFFIX}`,
		component: PageNotFoundComponent,
	},
];
