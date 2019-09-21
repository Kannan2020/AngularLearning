import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'Offline';
  // tslint:disable-next-line: no-input-rename
  @Input('serverInfo') server: {name: string};
  constructor() {
    this.serverStatus = Math.random() > 0.5 ?  'Online' : 'Offline';
   }

  ngOnInit() {
  }
getServerStatus() {
  return this.serverStatus;
}
getColor() {
  return this.serverStatus === 'Online' ? 'green' : 'red';
}
}
