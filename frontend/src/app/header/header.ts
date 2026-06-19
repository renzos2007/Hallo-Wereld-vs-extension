import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(private translate: TranslateService){
    this.translate.addLangs(['nl', 'en']);

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/nl|en/) ? browserLang : 'en');
  }

  public useLanguage(language: string): void {
    this.translate.use(language);
  }
}