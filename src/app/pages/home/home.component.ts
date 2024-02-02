import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

// Components
import { CardLinkComponent } from '@components/card-link/card-link.component';

// Helpers
import { getItem, keys } from '@helpers/storage.helper';

// Types
import { Session } from '@/types/session.type';
import { User } from '@/types/user.type';

@Component({
	standalone: true,
	imports: [CommonModule, CardLinkComponent],
	templateUrl: './home.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
class HomeComponent {
	user?: User = getItem<Session>(keys.session)?.user;
}

export default HomeComponent;
