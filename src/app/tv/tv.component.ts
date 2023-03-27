import { Component, Inject, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  tvShowList = [];

  constructor(private dataProvider: DataProviderService) {}

  ngOnInit() {
    this.tvShowList = this.dataProvider.getList();
  }
}
