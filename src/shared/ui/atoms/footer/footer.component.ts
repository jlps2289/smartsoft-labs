import { Component } from '@angular/core';

// Constants
import { NAME_DETAILS, NAME_SHORT, NAME_SLOGAN, VERSION } from '@constants/app-info.constant';

@Component({
	selector: 'app-footer',
	standalone: true,
	template: `<footer class="w-100 mx-auto mt-4 max-w-[75ch] text-pretty text-center text-sm text-gray-400">
		{{ name }}<br />
		{{ developer }} © {{ year }}
	</footer>`,
})
export class FooterComponent {
	name = `${NAME_SHORT} | ${NAME_SLOGAN} ${VERSION}`;
	developer = NAME_DETAILS;
	year = new Date().getFullYear();
}
