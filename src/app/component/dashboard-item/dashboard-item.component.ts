import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {

  @Input()
  title = 'Today';

  @Output()
  itemClick = new EventEmitter<string>();

  _currentDate = new Date();

  constructor() { }

  ngOnInit() {
  }

  onItemClick(item) {
    this.itemClick.emit(item);
  }

}
