import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { InfoCardComponent } from '../info-card/info-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCar,
  faImage,
  faPersonSwimming,
  faRefresh,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faSpotify, faSteam } from '@fortawesome/free-brands-svg-icons';
import { Error404Component } from '../error404/error404.component';
import { NumberCounterComponent } from '../number-counter/number-counter.component';
import { AareData } from '../external-information/aareguru/aareguru';
import { AareguruService } from '../external-information/aareguru/aareguru.service';
import { firstValueFrom } from 'rxjs';
import { MemeData } from '../external-information/meme/meme';
import { MemeService } from '../external-information/meme/meme.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    DatePipe,
    FontAwesomeModule,
    InfoCardComponent,
    Error404Component,
    NumberCounterComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  private readonly snackBar = inject(MatSnackBar);
  private readonly aareService = inject(AareguruService);
  private readonly memeService = inject(MemeService);

  readonly faPersonSwimming = faPersonSwimming;
  readonly faSteam = faSteam;
  readonly faSpotify = faSpotify;
  readonly faCar = faCar;
  readonly faMeme = faImage;
  readonly faRefresh = faRefresh;
  readonly faSpinner = faSpinner;

  readonly aareData = signal<AareData | null>(null);
  readonly memeData = signal<MemeData | null>(null);

  constructor() {
    this.updateAareData();
    this.updateMemeData();
  }

  async updateAareData(): Promise<void> {
    this.aareData.set(null);
    const data = await firstValueFrom(this.aareService.getAareData());
    this.aareData.set(data);

    this.openSnackBar('🌊 Sheesh! The AareGuru Data was updated.');
  }

  async updateMemeData(): Promise<void> {
    this.memeData.set(null);
    const data = await firstValueFrom(this.memeService.getMemeData());
    this.memeData.set(data);
    this.openSnackBar('🫡 Damn Bro! The Meme was updated.');
  }

  private openSnackBar(message: string, duration: number = 5000) {
    console.log(message);
    this.snackBar.open(message, undefined, {
      duration: duration,
    });
  }
}
