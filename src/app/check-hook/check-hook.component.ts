import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-check-hook',
  templateUrl: './check-hook.component.html',
  styleUrls: ['./check-hook.component.scss']
})
export class CheckHookComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit , AfterViewChecked {

  @Input()
  value = 'Initial value';

  constructor() {
    console.log('Check-hook Constructor' , this.value);
  }

  ngOnInit(): void {
    console.log('Check-hook ngOnInit' , this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Check-hook ngOnChanges', this.value, changes );
  }

  ngDoCheck(): void{
    console.log('Check-hook ngDoCheck', this.value);
  }



  ngOnDestroy(): void {
    console.log('Check-hook ngOnDestroy' , this.value);
  }

  ngAfterContentChecked(): void {
    console.log('Check-hook ngAfterContentChecked' , this.value);
  }

  ngAfterContentInit(): void {
    console.log('Check-hook ngAfterContentInit' , this.value);
  }

  ngAfterViewChecked(): void {
    console.log('Check-hook ngAfterViewChecked' , this.value);
  }

  ngAfterViewInit(): void {
    console.log('Check-hook ngAfterViewInit' , this.value);
  }

}
