import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { parseTemplate } from '@angular/compiler';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private ruter: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.server = data.server;
    });
    // // + is converting string to number
    // const id = +this.route.snapshot.params.id;
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe((params: Params) => {
    //     this.server = this.serversService.getServer(+params.id);
    // });
  }
  onEdit() {
    this.ruter.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
