import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

// Atoms
import { FooterComponent } from '@atoms/footer/footer.component';
import { NavbarComponent } from '@atoms/navbar/navbar.component';
import { SidenavComponent } from '@atoms/sidenav/sidenav.component';

@Component({
	standalone: true,
	imports: [CommonModule, MatSidenavModule, RouterOutlet, FooterComponent, NavbarComponent, SidenavComponent],
	templateUrl: './pages-layout.component.html',
})
class PagesLayoutComponent {
	showSidenav: boolean = false;

	toggleSidenav() {
		this.showSidenav = !this.showSidenav;
	}
}

export default PagesLayoutComponent;
