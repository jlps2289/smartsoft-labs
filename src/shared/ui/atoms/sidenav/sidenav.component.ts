import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-sidenav',
	standalone: true,
	imports: [CommonModule, MatIconModule, RouterLink, RouterLinkActive],
	templateUrl: './sidenav.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
	@Output() toggleSidenav = new EventEmitter<void>();

	onClosedMenu() {
		this.toggleSidenav.emit();
	}
}
