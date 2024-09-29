import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faYoutube,
  faInstagram,
  faLinkedin,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss',
})
export class SocialsComponent {
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faSpotify = faSpotify;
  faLinkedin = faLinkedin;
  faGlobe = faGlobe;
}
