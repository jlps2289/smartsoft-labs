import { inject } from '@angular/core';
import { type CanActivateChildFn, Router } from '@angular/router';

// Helpers
import { getItem, keys } from '@helpers/storage.helper';

export const authGuard: CanActivateChildFn = () => {
	const token = getItem(keys.token);
	const router: Router = inject(Router);

	return !!token || router.navigate(['login']);
};
