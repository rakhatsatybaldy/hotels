import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {NewServiceService} from './new-service.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent{

}
