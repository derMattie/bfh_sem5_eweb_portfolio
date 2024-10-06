import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { AareData } from './aareguru';

@Injectable({
  providedIn: 'root',
})
export class AareguruService {
  protected httpClient = inject(HttpClient);

  private apiUrl =
    'https://aareguru.existenz.ch/v2018/today?city=thun&app=my.app.ch&version=1.0.42';

  getAareData(): Observable<AareData> {
    return this.httpClient.get<AareData>(this.apiUrl);
  }
}
