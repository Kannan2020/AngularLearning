import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'Offline';
  // tslint:disable-next-line: no-input-rename
  @Input('serverInfo') server: { name: string };
  // tslint:disable-next-line: no-output-rename
  @Output('notifyClient') clientNotified = new EventEmitter<{ name: string }>();
  constructor(private notificationServer: NotificationService) {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  ngOnInit() {
  }
  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
  NotifyServer() {
    this.clientNotified.emit({ name: this.server.name });
    this.notificationServer.statusNotification.emit(this.server.name);
  }
}
