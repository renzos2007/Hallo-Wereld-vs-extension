import { Component } from '@angular/core';
import { ProjectIntro } from "./project-intro/project-intro";
import { GetStarted } from "./get-started/get-started";
import { Features } from "./features/features";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ProjectIntro, GetStarted, Features],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss'],
})
export class Homepage {}
