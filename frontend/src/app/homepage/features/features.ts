import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrls: ['./features.scss'],
})
export class Features {
  features = [
    { icon: 'ti-plug', label: 'Installeert extensies' },
    { icon: 'ti-folder-plus', label: 'Maakt als het nodig is een .venv aan' },
    { icon: 'ti-file-code', label: 'Genereert main bestand' },
    { icon: 'ti-device-desktop', label: 'Windows, macOS & Linux' },
  ];
}