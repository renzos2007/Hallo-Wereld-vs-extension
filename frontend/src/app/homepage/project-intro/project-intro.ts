import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe} from '@ngx-translate/core';
 
@Component({
  selector: 'app-project-intro',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './project-intro.html',
  styleUrls: ['./project-intro.scss'],
})
export class ProjectIntro {

    badges = [
        { icon: 'ti-brand-python', key: 'projectIntro.badges.python' },
        { icon: 'ti-brand-vscode', key: 'projectIntro.badges.vscode' },
        { icon: 'ti-world',        key: 'projectIntro.badges.openSource' }
    ];
}