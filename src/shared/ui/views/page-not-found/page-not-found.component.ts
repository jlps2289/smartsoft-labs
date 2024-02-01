import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
	templateUrl: './page-not-found.component.html',
	standalone: true,
	imports: [MatButtonModule, RouterModule],
})
export class PageNotFoundComponent {}
