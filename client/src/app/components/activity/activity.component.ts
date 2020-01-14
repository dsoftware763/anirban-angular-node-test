import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  @Input() title: string;
  @Input() dataList;
  selectedItem = 0;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() { }

  getToDo(taskId, i) {
    this.selectedItem = i
    this.dashboardService.fetchToDoList(taskId)
  }
  
}
