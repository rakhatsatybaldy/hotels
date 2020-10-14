import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-hook-second',
  templateUrl: './hook-second.component.html',
  styleUrls: ['./hook-second.component.scss']
})
export class HookSecondComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit , AfterViewChecked {

  @Input()
  value = 'Hook-second value';

  constructor() {
    console.log('Hook-second Constructor' , this.value);
  }

  ngOnInit(): void {
    console.log('Hook-second ngOnInit' , this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Hook-second ngOnChanges', this.value, changes );
  }

  ngDoCheck(): void{
    console.log('Hook-second ngDoCheck', this.value);
  }



  ngOnDestroy(): void {
    console.log('Hook-second ngOnDestroy' , this.value);
  }

  ngAfterContentChecked(): void {
    console.log('Hook-second ngAfterContentChecked' , this.value);
  }

  ngAfterContentInit(): void {
    console.log('Hook-second ngAfterContentInit' , this.value);
  }

  ngAfterViewChecked(): void {
    console.log('Hook-second ngAfterViewChecked' , this.value);
  }

  ngAfterViewInit(): void {
    console.log('Hook-second ngAfterViewInit' , this.value);
  }


}
