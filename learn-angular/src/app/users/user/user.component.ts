import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // On loading time we can use, It will work wonly on load
    // this.user = {
    //   id: this.route.snapshot.params.id,
    //   name: this.route.snapshot.params.name
    // };
    // this will work each changes
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user = {
          id: params.id,
          name: params.name
        };
      }
    );
  }
  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }
}
