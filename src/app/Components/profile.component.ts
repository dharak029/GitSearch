import { Component } from '@angular/core';
import {GithubServices} from '../services/github.services';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  user;
  repos;
  username: string;
  constructor(private _gitHubService: GithubServices) {
    this.user = false;
  }

  searchUser() {

    this._gitHubService.updateUser(this.username);

    this._gitHubService.getUser().subscribe(user => {this.user = user; });

    this._gitHubService.getRepos().subscribe(repos => {this.repos = repos; });
  }

}
