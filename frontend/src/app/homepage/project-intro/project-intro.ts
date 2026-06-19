import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-project-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-intro.html',
  styleUrls: ['./project-intro.scss'],
})
export class ProjectIntro {
  badges = [
    { icon: 'ti-brand-python', label: 'Python' },
    { icon: 'ti-brand-vscode', label: 'VS Code' },
    { icon: 'ti-world', label: 'Open Source' },
  ];
}