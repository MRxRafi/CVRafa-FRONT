import {Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {LANGUAGES} from './languages.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language: LANGUAGES;
  private languageSubject$: Subject<LANGUAGES>;
  constructor() {
    this.language = LANGUAGES.SPANISH;
    this.languageSubject$ = new Subject();
  }
  getLanguage(): LANGUAGES {
    return this.language;
  }
  subscribe(observerCallback: () => void): Subscription {
    return this.languageSubject$.asObservable().subscribe(
      () => this.notifyObservers(observerCallback),
      (error) => alert('Error' + error)
    );
  }
  next(observerLanguage: LANGUAGES): void {
    this.language = observerLanguage;
    this.languageSubject$.next(observerLanguage);
  }
  private notifyObservers(observerCallback: () => void): void {
    observerCallback();
  }
}
