import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

// Atoms
import { FooterComponent } from '@atoms/footer/footer.component';
import { NavbarComponent } from '@atoms/navbar/navbar.component';
import { SidenavComponent } from '@atoms/sidenav/sidenav.component';

// Services
import { AuthService } from '@services/auth.service';

@Component({
	standalone: true,
	imports: [CommonModule, MatSidenavModule, RouterOutlet, FooterComponent, NavbarComponent, SidenavComponent],
	templateUrl: './pages-layout.component.html',
	styleUrl: './pages-layout.component.scss',
})
class PagesLayoutComponent {
	logout = inject(AuthService).logout();

	onLogout() {
		this.logout.mutate(null);
	}
}

export default PagesLayoutComponent;
