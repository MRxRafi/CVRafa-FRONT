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
  subscribe(callback: (language: LANGUAGES) => void): Subscription {
    return this.languageSubject$.asObservable().subscribe(
      (language) => this.notifyObserver(callback, language),
      (error) => alert('Error' + error)
    );
  }
  next(): void {
    if (this.language === LANGUAGES.SPANISH) {
      this.language = LANGUAGES.ENGLISH;
    } else {
      this.language = LANGUAGES.SPANISH;
    }
    this.languageSubject$.next(this.language);
  }
  getLanguage(): LANGUAGES {
    return this.language;
  }
  private notifyObserver(callback: any, language: LANGUAGES): void {
    callback(language);
  }
}
