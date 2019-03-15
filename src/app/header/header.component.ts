import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  protected loggedIn: boolean;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        this.loggedIn = !!user;
      }
    );
  }

  onSignOut() {
    this.authenticationService.signOutUser();
  }

}
