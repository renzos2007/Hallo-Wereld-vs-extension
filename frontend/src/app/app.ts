import { Component, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Homepage } from "./homepage/homepage";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Homepage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['nl', 'en']);
    // this.translate.setDefaultLang('nl');
    // this.translate.use('nl');
  }
  protected readonly title = signal('VS-code-extension-page');
}

