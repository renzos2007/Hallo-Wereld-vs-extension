import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-started.html',
  styleUrls: ['./get-started.scss'],
})
export class GetStarted {
  steps = [
    {
      label: 'Installeer de extensie',
      detail: 'code --install-extension hallo-wereld.vsix',
      isCode: true,
    },
    {
      label: 'Open het Command Palette',
      detail: 'Druk op Ctrl+Shift+P en zoek op Hello World {programeertaal die waarin je wil werken}',
      isCode: false,
    },
    {
      label: 'Klaar om te coderen',
      detail: 'De extensie richt je project automatisch in.',
      isCode: false,
    },
  ];
}