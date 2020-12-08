import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  nameControl : FormControl;
  teleControl : FormControl

  ngOnInit(){
    this.nameControl = new FormControl('Rakhat');
    this.teleControl = new FormControl('87781710691' , [Validators.required , Validators.minLength(11) , Validators.maxLength(11)]);
    this.nameControl.valueChanges.subscribe((value)=>console.log(value));
    this.teleControl.statusChanges.subscribe((status) => console.log(status))
  }

}
