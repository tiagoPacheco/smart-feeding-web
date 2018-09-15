import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';
import { NotificationModel } from '../../../shared/models/notification-model';
import { GlobalService } from '../../../shared/services/global.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  showloading: boolean = false;

  public AnimationBarOption;

  constructor(public _globalService: GlobalService,
    private  _indexService: IndexService
  ) { }

  ngOnInit() {

  }

  checkHowManyMealsLeft(){

    this._indexService.getThingData().subscribe(
      data => {
        if(data.length < 1){
          this.alertMessage({ type: 'default', title: 'Check the pet profile!', value: 'It seems you have not updated your pet\'s data yet. Go to \'Pet Profile\' and update.'});
        }
        else{
          this.alertMessage({ type: 'default', title: 'Meals that remain...', value: `There are still ${data[0].amountFood} grams left in the pet's bowl.`});
        }
      }
    );
  }

  checkHowManyDaysMealsLeft(){

  }

  feedPet() {
    this._globalService.feedPet()
  }

  alertMessage(data: NotificationModel) {
    this._globalService.dataBusChanged('notification', data);
  }
}
