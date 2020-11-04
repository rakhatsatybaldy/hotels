import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  consoleText(arg){
    alert(arg);
  }

  constructor() { }
}
