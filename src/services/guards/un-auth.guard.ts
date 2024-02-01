import { inject } from '@angular/core';
import { type CanActivateFn, Router } from '@angular/router';

// Helpers
import { getItem, keys } from '@helpers/storage.helper';

export const unAuthGuard: CanActivateFn = () => {
	const token = getItem(keys.token);
	const router: Router = inject(Router);

	return !token || router.navigate(['app']);
};
