import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-buttonevent',
  templateUrl: './buttonevent.component.html',
  styleUrls: ['./buttonevent.component.css']
})
export class ButtoneventComponent implements OnInit,AfterViewInit {

  @ViewChild('filterinput') filterElementRef: ElementRef | undefined;
  constructor() { }
  ngAfterViewInit(): void {

// fromEvent(this.filterElementRef?.nativeElement,'keydown').subscribe(  (x:any) =>{ console.log(x.code)
// if (x.code==="AltLeft" || x.code==="AltRight"){
//   console.log("Alt is pressed");

// }
// }
// )
  }

  ngOnInit(): void {
  }

}
