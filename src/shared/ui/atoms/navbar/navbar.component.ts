import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

// Services
import { AuthService } from '@services/auth.service';

// Types
import type { Session } from '@/types/session.type';
import type { User } from '@/types/user.type';

// Helpers
import { getItem, keys } from '@/shared/helpers/storage.helper';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule, MatTooltipModule, MatMenuModule],
	templateUrl: './navbar.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
	user?: User = getItem<Session>(keys.session)?.user;
	logout = inject(AuthService).logout();

	@Output() toggleSidenav = new EventEmitter<void>();

	onLogout() {
		this.logout.mutate(null);
	}
}
