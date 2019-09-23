import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    allowNewServer = false;
    serverCreationStatus = '';
    serverName = 'Test Server';
    servers = [{name: 'Test Server - 1'}, {name: 'Test Server - 2'}];
    constructor(private notificationServer: NotificationService) {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
        this.notificationServer.statusNotification.subscribe((message: string) => {
            alert('Notification from ' + message);
        });
    }
    onServerCreate() {
        this.servers.push({name: this.serverName});
        this.serverCreationStatus = 'Server was created, server name is   ' + this.serverName;
    }
    LocalClientNotified(eventData: {name: string}) {
        console.log('Nofification received from ' + eventData.name);
    }
}
