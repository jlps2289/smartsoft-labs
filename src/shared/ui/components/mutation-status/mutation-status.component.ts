import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { MutationResult } from '@ngneat/query';

// Atoms
import { LoadingComponent } from '@atoms/loading/loading.component';

@Component({
	selector: 'app-mutation-status',
	standalone: true,
	imports: [CommonModule, LoadingComponent, MatIconModule],
	template: `@if (mutation.result$ | async; as result) {
		<app-loading [spin]="result.isPending" />

		@if (!!messageSuccess && result.isSuccess) {
			<div class="my-4 flex items-center rounded-lg bg-green-100 p-4 text-sm text-green-700" role="alert">
				<mat-icon class="me-2">check_circle</mat-icon>
				<div>{{ messageSuccess }}</div>
			</div>
		}
		@if (showError && result.isError) {
			<div class="my-4 flex items-center rounded-lg bg-red-100 p-4 text-sm text-red-700" role="alert">
				<mat-icon class="me-2">cancel</mat-icon>
				<div>{{ result.error.message }}</div>
			</div>
		}
	}`,
})
export class MutationStatusComponent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input({ required: true }) mutation!: MutationResult<any, any, any>;
	@Input() messageSuccess!: string;
	@Input() showError: boolean = true;
}
