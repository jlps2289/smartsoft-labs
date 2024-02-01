import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	standalone: true,
	imports: [CommonModule],
	templateUrl: './import-csv.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
class ImportCsvComponent {}

export default ImportCsvComponent;
