import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { OrganizationsPage } from '../pages/organizations/organizations';
import { ReposPage } from '../pages/repos/repos';
import { UsersPage } from '../pages/users/users';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GithubUsers } from '../providers/github-users';

@NgModule({
  declarations: [
    MyApp,
    OrganizationsPage,
    ReposPage,
    UsersPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrganizationsPage,
    ReposPage,
    UsersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsers
  ]
})
export class AppModule {}
