import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
	selector: 'app-field-message-errors',
	standalone: true,
	imports: [CommonModule, MatFormFieldModule],
	template: `
		@if ((isSubmit && f[field].invalid) || (f[field].invalid && f[field].touched)) {
			@if (f[field].errors?.['required']) {
				Este campo es obligatorio.
			}
			@if (f[field].errors?.['email']) {
				El formato de correo es invalido.
			}
		}
	`,
})
export class FieldMessageErrorsComponent {
	@Input({ required: true }) form!: FormGroup;
	@Input({ required: true }) field: string = '';
	@Input({ required: true }) isSubmit: boolean = false;

	get f(): { [key: string]: AbstractControl } {
		return this.form.controls;
	}
}
