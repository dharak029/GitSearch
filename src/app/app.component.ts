import { Component } from '@angular/core';
import {GithubServices} from './services/github.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubServices]
})
export class AppComponent {
  title = 'app';
}
