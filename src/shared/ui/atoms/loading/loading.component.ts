import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
	selector: 'app-loading',
	standalone: true,
	imports: [CommonModule, MatProgressSpinnerModule],
	template: ` @if (spin) {
		<div
			class="fixed bottom-0 left-0 right-0 top-0 z-50 grid h-screen w-screen place-items-center bg-white/70 backdrop-blur-sm">
			<mat-spinner color="accent" [diameter]="30" [strokeWidth]="2" />
		</div>
	}`,
})
export class LoadingComponent {
	@Input() spin: boolean = false;
}
