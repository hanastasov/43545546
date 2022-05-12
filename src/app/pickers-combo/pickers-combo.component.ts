import { Component, OnInit } from '@angular/core';
import { TravelAppService } from '../services/travel-app.service';

@Component({
  selector: 'app-pickers-combo',
  templateUrl: './pickers-combo.component.html',
  styleUrls: ['./pickers-combo.component.scss']
})
export class PickersComboComponent implements OnInit {
  public travelAppArticlesSource2: any = null;
  public travelAppArticlesSource3: any = null;

  constructor(
    private travelAppService: TravelAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.travelAppService.getData('Articles Source 2').subscribe(data => this.travelAppArticlesSource2 = data);
    this.travelAppService.getData('Articles Source 3').subscribe(data => this.travelAppArticlesSource3 = data);
  }
}
