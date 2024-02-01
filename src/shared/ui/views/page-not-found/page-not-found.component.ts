import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
	templateUrl: './page-not-found.component.html',
	standalone: true,
	imports: [MatButtonModule, RouterLink],
})
export class PageNotFoundComponent {}
