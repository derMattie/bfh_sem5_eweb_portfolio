import { Component, inject, signal } from '@angular/core';
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
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MemeData } from '../external-information/meme/meme';
import { MemeService } from '../external-information/meme/meme.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    InfoCardComponent,
    Error404Component,
    NumberCounterComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  private _snackBar = inject(MatSnackBar);

  private readonly aareService = inject(AareguruService);
  private readonly memeService = inject(MemeService);

  faPersonSwimming = faPersonSwimming;
  faSteam = faSteam;
  faSpotify = faSpotify;
  faCar = faCar;
  faMeme = faImage;
  faRefresh = faRefresh;
  faSpinner = faSpinner;

  aareData$?: Observable<AareData>;
  memeData$?: Observable<MemeData>;

  ngOnInit() {
    this.updateAareData();

    this.updateMemeData();
  }

  updateAareData(): void {
    this.aareData$ = this.aareService.getAareData();
    this.openSnackBar('🌊 Sheesh! The AareGuru Data was updated.');
  }

  updateMemeData(): void {
    this.memeData$ = this.memeService.getMemeData();
    this.openSnackBar('🫡 Damn Bro! The Meme was updated.');
  }

  private openSnackBar(message: string, duration: number = 7000) {
    console.log(message);
    this._snackBar.open(message, undefined, {
      duration: duration,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
