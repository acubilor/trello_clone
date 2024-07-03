import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { faBell , faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ButtonComponent, OverlayModule ,
            CommonModule, FontAwesomeModule],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

  faBell = faBell;
  faInfoCircle = faInfoCircle;
  isOpen = signal(false);

  changeOverlay(){
    this.isOpen.update( prevState => !prevState );
  }



}
