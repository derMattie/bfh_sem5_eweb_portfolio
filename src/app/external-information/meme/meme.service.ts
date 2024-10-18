import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemeData } from './meme';

@Injectable({
  providedIn: 'root',
})
export class MemeService {
  protected httpClient = inject(HttpClient);

  private apiUrl =
    'https://api.apileague.com/retrieve-random-meme?api-key=06295cd4cf064bc7b2d2b057a80280e6';

  getMemeData(): Observable<MemeData> {
    return this.httpClient.get<MemeData>(this.apiUrl);
  }
}
