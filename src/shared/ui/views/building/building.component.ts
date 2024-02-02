import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
	templateUrl: './building.component.html',
	standalone: true,
	imports: [MatButtonModule, RouterLink],
})
export class BuildingComponent {}
