import { Component, inject, signal } from '@angular/core';
import { InfoCardComponent } from '../info-card/info-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCar, faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
import { faSpotify, faSteam } from '@fortawesome/free-brands-svg-icons';
import { Error404Component } from '../error404/error404.component';
import { NumberCounterComponent } from '../number-counter/number-counter.component';
import { AareData } from '../external-information/aareguru/aareguru';
import { AareguruService } from '../external-information/aareguru/aareguru.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    InfoCardComponent,
    Error404Component,
    NumberCounterComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  private readonly aareService = inject(AareguruService);

  faPersonSwimming = faPersonSwimming;
  faSteam = faSteam;
  faSpotify = faSpotify;
  faCar = faCar;

  aareData$?: Observable<AareData>;

  ngOnInit() {
    this.updateAareData();
  }

  private updateAareData(): void {
    this.aareData$ = this.aareService.getAareData();
  }
}
