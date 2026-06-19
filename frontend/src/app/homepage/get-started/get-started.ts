import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './get-started.html',
  styleUrls: ['./get-started.scss'],
})
export class GetStarted {
    steps = [
        { labelKey: 'getStarted.steps.step1.label', detailKey: 'getStarted.steps.step1.detail', isCode: true },
        { labelKey: 'getStarted.steps.step2.label', detailKey: 'getStarted.steps.step2.detail', isCode: false },
        { labelKey: 'getStarted.steps.step3.label', detailKey: 'getStarted.steps.step3.detail', isCode: false },
    ];
}