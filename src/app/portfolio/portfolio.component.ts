import { Component } from '@angular/core';
import { InfoCardComponent } from '../info-card/info-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCar, faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
import { faSpotify, faSteam } from '@fortawesome/free-brands-svg-icons';
import { Error404Component } from '../error404/error404.component';
import { NumberCounterComponent } from '../number-counter/number-counter.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    FontAwesomeModule,
    InfoCardComponent,
    Error404Component,
    NumberCounterComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  faPersonSwimming = faPersonSwimming;
  faSteam = faSteam;
  faSpotify = faSpotify;
  faCar = faCar;
}
