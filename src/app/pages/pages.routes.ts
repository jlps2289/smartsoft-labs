import { Routes } from '@angular/router';

export const pageRoutes: Routes = [
	{
		path: '',
		title: 'Inicio',
		loadComponent: () => import('./home/home.component'),
	},
	{
		path: 'import-csv',
		title: 'Importar CSV',
		loadComponent: () => import('./import-csv/import-csv.component'),
	},
	{
		path: 'crud',
		title: 'CRUD',
		loadComponent: () => import('./crud/crud.component'),
	},
	{
		path: '**',
		redirectTo: '',
	},
];
