import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { SnakBarService } from '../../services/snackbar.service';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  titleHome: string = "Home Builder";
  titleActivity: string = "Activity";
  tasksData: any[] = [];
  toDoItems: any[] = [];
  subscription: Subscription;

  constructor(
    private dashboardService: DashboardService,
    private snackbarService: SnakBarService) { }

  ngOnInit() {
    this.getTasksList();
    this.subscription = this.dashboardService.getTodoListResults().subscribe(data => {
      this.toDoItems = data;
    });
  }

  getTasksList() {
    this.dashboardService.getTasks().subscribe(res => {
      this.tasksData = JSON.parse(res._body).data
      if (this.tasksData.length)
        this.dashboardService.fetchToDoList(this.tasksData[0].id)
    }, err => {
      this.snackbarService.error(err.message)
    })
  }

}
