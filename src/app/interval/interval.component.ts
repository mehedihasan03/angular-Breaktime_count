import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  title = 'break-countdown';
  givenMinutes = 0;
  seconds = 0;
  minutes = 0;
  fracSeconds = 0;
  started = false;

  interval: any


  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.started = true;
    this.seconds = this.givenMinutes * 60;


    this.interval = setInterval(() => {
      this.fracSeconds = this.seconds % 60;

      this.minutes = (this.seconds - this.fracSeconds) / 60;

      if (this.seconds > 0) {
        this.seconds--
      } else {
        this.stop()
      }
    }, 1000)
  }

  stop() {
    clearInterval(this.interval)
    this.started = false
    this.givenMinutes = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.fracSeconds = 0;
  }

  getText(){
   let msg = (this.minutes<10? '0' + this.minutes : this.minutes) + ":" + (this.fracSeconds<10? '0' + this.fracSeconds : this.fracSeconds)
   return msg.trim()
  }


}
