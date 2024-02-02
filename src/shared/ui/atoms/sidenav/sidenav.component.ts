import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './sidenav.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
	@Output() toggleSidenav = new EventEmitter<void>();
}
