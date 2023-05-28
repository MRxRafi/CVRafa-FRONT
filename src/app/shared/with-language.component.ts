import {Subscription} from 'rxjs';
import {LANGUAGES} from './languages.model';
import {LanguageService} from './language.service';
import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({ template: '' })
export class WithLanguageComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  constructor(protected languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.subscription = this.languageService.subscribe(
      (language) => this.changeTextLanguage(language)
    );
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

  protected changeTextLanguage(language: LANGUAGES): void { }
}
