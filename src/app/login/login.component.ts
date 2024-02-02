import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';

// Atoms
import { FooterComponent } from '@atoms/footer/footer.component';

// Components
import { FieldMessageErrorsComponent } from '@components/field-message-errors/field-message-errors.component';
import { MutationStatusComponent } from '@components/mutation-status/mutation-status.component';

// Services
import { AuthService } from '@services/auth.service';

@Component({
	standalone: true,
	imports: [
		CommonModule,
		RouterLink,
		ReactiveFormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		FooterComponent,
		FieldMessageErrorsComponent,
		MutationStatusComponent,
	],
	templateUrl: './login.component.html',
})
class LoginComponent implements OnInit {
	router = inject(Router);
	mutation = inject(AuthService).login();

	hide = true;
	isSubmit = false;

	form: FormGroup = new FormGroup({
		username: new FormControl(''),
		password: new FormControl(''),
	});

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			username: ['jose.parra@smartsoftlabs.com', [Validators.required, Validators.email]],
			password: ['Qwe@123', [Validators.required]],
		});
	}

	onSubmit() {
		this.isSubmit = true;
		if (this.form.invalid) return;
		this.mutation.mutateAsync(this.form.value).then(console.log).catch(console.log);
	}
}

export default LoginComponent;
