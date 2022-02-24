import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit ,OnInit{
  title = 'ngx-chart_part_1';


  @ViewChild('filterinput') filterElementRef:any;
  constructor() {
  }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    document.addEventListener("keydown", function onEvent(event)
    {
        console.log(event.key)

    });
    }

    // this.filterElementRef.nativeElement.focus();
    // fromEvent(this.filterElementRef?.nativeElement, 'keyup').subscribe((x: any) => {
    //   console.log(x.code)
    //   if (x.code === "AltLeft" || x.code === "AltRight") {
    //     console.log("Alt is pressed");

    //   }
    // }

    // )

  // }



}

