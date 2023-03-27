import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataProviderService } from 'src/app/data-provider.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit, OnDestroy {
  tvShow;
  sub;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataProvider: DataProviderService) {
  }

  ngOnInit() {
    // Subscribe to any changes of the route parameters when the component is initialized
    // as it will be reused when navigating between the same route with different parameters
    this.sub = this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.tvShow = this.dataProvider.getTvShow(id);
    });
  }

  ngOnDestroy() {
    // Clean up subscriptions to avoid keeping track of changes for component instances that will never be used again
    this.sub.unsubscribe();
  }

  goBack() {
    // Example of navigating programatically instead of using routerLink
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
