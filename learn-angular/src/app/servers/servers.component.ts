import { Component } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    allowNewServer = false;
    serverCreationStatus = '';
    serverName = 'Test Server';
    servers = ['Test Server - 1', 'Test Server - 2'];
    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }
    onServerCreate() {
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created, server name is   ' + this.serverName;
    }
}
