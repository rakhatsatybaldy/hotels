import { Component } from '@angular/core';
import {UsersService} from './users.service';
import {NewServiceService} from './new-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent {
  constructor(svc : NewServiceService) {
    svc.consoleText("Hello World! This is my first service");
  }
}
