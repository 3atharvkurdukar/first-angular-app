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

  constructor() { }

  ngOnInit() {
  }

}
