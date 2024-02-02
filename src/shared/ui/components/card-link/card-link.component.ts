import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-card-link',
	standalone: true,
	imports: [CommonModule, RouterLink, MatIconModule],
	template: `
		<a
			class="block w-full rounded-lg border border-gray-200 bg-white p-6 shadow ring-primary-700 ring-offset-2 transition-all hover:border-primary-700 hover:bg-primary-50/50 hover:ring-4"
			[routerLink]="routerLink">
			<mat-icon class="text-primary-700">{{ icon }}</mat-icon>
			<h5 class="mb-1 text-balance text-2xl font-bold tracking-tight text-primary-700">
				{{ title }}
			</h5>
			<p class="text-pretty font-normal text-gray-500">
				{{ description }}
			</p>
		</a>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLinkComponent {
	@Input({ required: true }) icon!: string;
	@Input({ required: true }) routerLink: string = '';
	@Input({ required: true }) title!: string;
	@Input({ required: true }) description!: string;
}
