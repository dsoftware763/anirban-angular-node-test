import { SnakBarService } from './../../services/snackbar.service';
import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homebuilder',
  templateUrl: './homebuilder.component.html',
  styleUrls: ['./homebuilder.component.scss']
})
export class HomebuilderComponent implements OnInit {
  @Input() title: string;
  @Input() dataItem: any;
  constructor(private dashboardService: DashboardService,
    private snakBarService: SnakBarService) { }

  ngOnInit() { }

  updateStatus(event, item) {
    let index = this.dataItem.indexOf(item);
    let data = { isComplete: !item.isComplete };
    this.dashboardService.updateToDoStatus(data, item.id).subscribe(res => {
      this.dataItem[index] = JSON.parse(res._body)
      this.snakBarService.success('Status updated Successfully')
    }, err => {
      this.snakBarService.error(JSON.parse(err._body).message)
      event.target.checked = false;
    })
  }

}
