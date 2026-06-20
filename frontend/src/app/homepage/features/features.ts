import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './features.html',
  styleUrls: ['./features.scss'],
})
export class Features {

    features = [
        { icon: 'ti-plug',           key: 'features.pills.extensions' },
        { icon: 'ti-folder-plus',    key: 'features.pills.venv' },
        { icon: 'ti-file-code',      key: 'features.pills.mainFile' },
        { icon: 'ti-device-desktop', key: 'features.pills.platforms' },
    ];
}