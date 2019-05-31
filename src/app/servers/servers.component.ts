import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',   // Tag Selector
  // selector: '.app-servers',  // Class Selector
  // selector: '[app-servers]',    // Attribute Selector
  // template: '<app-server></app-server><app-server></app-server>'
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  username = '';

  constructor() {
  }

  ngOnInit() {
  }

  isUsernameEmpty() {
    return this.username.length === 0;
  }

  onResetUsername() {
    this.username = '';
  }
}
