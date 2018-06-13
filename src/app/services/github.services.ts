import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class GithubServices {
  private username: string;
  private client_id = '8ca2a8dd8bda40db2086';
  private client_secret = 'a6d70614f5edf3e460108076cdf86a461fb32e38';

  constructor(private _http: HttpClient) {
    console.log('Github service ready');
    this.username = 'dharak029';
    }
  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id +
      '&client_secret' + this.client_secret);
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id +
      '&client_secret' + this.client_secret);
  }

  updateUser(username: string) {
    this.username = username;
  }
}
