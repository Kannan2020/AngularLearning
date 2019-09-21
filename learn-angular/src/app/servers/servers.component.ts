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
    servers = [{name: 'Test Server - 1'}, {name: 'Test Server - 2'}];
    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }
    onServerCreate() {
        this.servers.push({name: this.serverName});
        this.serverCreationStatus = 'Server was created, server name is   ' + this.serverName;
    }
    LocalClientNotified(eventData: {name: string}) {
        console.log('Nofification received from ' + eventData.name);
    }
}
