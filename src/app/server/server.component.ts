import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: []
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'online';

  getServerStatus() {
    return this.serverStatus;
  }
}
