import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserDetailsPage } from '../../pages/user-details/user-details';

import { User } from '../../models/user';

import { GithubUsers } from '../../providers/github-users';

/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[];
  originalUsers: User[];

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
    githubUsers.load().subscribe(users => { 
      this.users = users;
      this.originalUsers = users;
    });

    githubUsers.searchUsers('cnswico').subscribe(user => { console.log(user) });
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }

  search(searchEvent) {
    let term = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.users = this.originalUsers;
    } else {
      // Get the searched users from github
      this.githubUsers.searchUsers(term).subscribe(users => {
        this.users = users
      });
    }
  }

  // search(searchEvent) {
  //   let term = searchEvent.target.value;

  //   if (term.trim() === '' || term.trim().length < 3) {
  //     this.users = this.originalUsers;
  //   } else {
  //     this.githubUsers.searchUsers(term).subscribe(users => {
  //       this.users = users
  //     });
  //   }
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
