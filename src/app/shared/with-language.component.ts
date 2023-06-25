import {Subscription} from 'rxjs';
import {LANGUAGES} from './languages.model';
import {LanguageService} from './language.service';
import {Component} from '@angular/core';

@Component({ template: '' })
export class WithLanguageComponent {
  private subscription!: Subscription;
  constructor(protected languageService: LanguageService) {
  }
  // TODO Implementar en todos los componentes los onInit y onDestroy
  languageComponentOnInit(): void {
    this.subscription = this.languageService.subscribe(
      (language) => this.changeTextLanguage(language)
    );
  }

  languageComponentOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

  /*ngOnInit(): void {
    this.subscription = this.languageService.subscribe(
      (language) => this.changeTextLanguage(language)
    );
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }*/

  protected changeTextLanguage(language: LANGUAGES): void { }
}
