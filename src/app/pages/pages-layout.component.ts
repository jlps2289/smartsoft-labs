import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	templateUrl: './pages-layout.component.html',
	styleUrl: './pages-layout.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
class PagesLayoutComponent {}

export default PagesLayoutComponent;
