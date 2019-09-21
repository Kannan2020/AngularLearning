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
    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }
    onServerCreate() {
        this.serverCreationStatus = 'Server was created, server name is   ' + this.serverName;
    }
}
