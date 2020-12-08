import { Component, OnInit } from '@angular/core';
import {HotelService} from '../hotel.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.scss']
})
export class SetupPageComponent implements OnInit {
  size;


  constructor(private hotelService : HotelService) { }

  ngOnInit(): void {
    this.size = this.hotelService.size
  }

  onChange(){
    this.hotelService.setSize(+this.size);
  }

}
