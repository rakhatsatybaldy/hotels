import { Component, OnInit } from '@angular/core';
import {HotelService} from '../hotel.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {



  public hotels;

  searchName = '';
  private _hotelService;

  constructor(hotelService : HotelService) {
    this._hotelService = hotelService;
  }

  ngOnInit(): void {
    this.hotels = this._hotelService.getAll();

  }
}
