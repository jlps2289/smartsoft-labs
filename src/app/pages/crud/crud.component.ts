import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	standalone: true,
	imports: [CommonModule],
	templateUrl: './crud.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
class CrudComponent {}

export default CrudComponent;
