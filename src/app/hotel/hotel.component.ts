import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent{

  @Input() hotel;
  isMarked = false;

  // tslint:disable-next-line:typedef
  onClick(){
    this.isMarked = true;
  }

}
