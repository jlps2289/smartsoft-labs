import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { injectMutation } from '@ngneat/query';
import { Observable } from 'rxjs';

// Helpers
import { clearStorage, keys, setItem } from '@helpers/storage.helper';

// Types
import type { P_Login, Session } from '@/types/session.type';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	#mutation = injectMutation();
	router = inject(Router);

	login() {
		return this.#mutation({
			mutationFn: ({ username, password }: P_Login): Observable<Session> =>
				new Observable(observer => {
					const _username = 'jose.parra@smartsoftlabs.com';
					const _password = 'Qwe@123';

					if (username !== _username || password !== _password) {
						return observer.error({ message: 'El usuario y/o la contraseña son inválidos.' });
					}

					const token = 'cf1329fd-824d-4316-830d-6c31e9d3d77c';
					const user = { email: _username, fullname: 'Jose Luis', nickname: 'jose.parra' };

					setItem(keys.token, token);
					setItem<Session>(keys.session, { user, token });

					this.router.navigate(['app']);
					return observer.next({ user, token });
				}),
		});
	}

	logout() {
		return this.#mutation({
			mutationFn: (): Observable<void> =>
				new Observable(observer => {
					clearStorage();
					this.router.navigate(['login']);
					return observer.next();
				}),
		});
	}
}
