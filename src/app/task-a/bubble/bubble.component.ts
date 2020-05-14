import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ICountry } from "../country";

@Component({
  selector: "app-bubble",
  templateUrl: "./bubble.component.html",
  styleUrls: ["./bubble.component.css"],
})
export class BubbleComponent implements OnInit {
  diameter;
  bg;
  bottom;
  left;
  @Input() country: ICountry;
  @Output() onHover = new EventEmitter();
  @Output() onLeave = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.left = 90 * Math.log(this.country.deaths);
    this.bottom =
      40 * Math.log(this.country.recoverd ? this.country.recoverd : 1);
    this.diameter = 5 * Math.log(this.country.cases);
    if (this.country.cases < 1000) {
      this.bg = "rgba(72, 255, 0)";
    } else if (this.country.cases >= 1000 && this.country.cases < 2000) {
      this.bg = "rgba(170, 230, 0)";
    } else if (this.country.cases >= 2000 && this.country.cases < 5000) {
      this.bg = "rgba(238, 255, 0)";
    } else if (this.country.cases >= 5000 && this.country.cases < 10000) {
      this.bg = "rgba(255, 208, 0)";
    } else if (this.country.cases >= 10000 && this.country.cases < 50000) {
      this.bg = "rgba(255, 123, 0)";
    } else if (this.country.cases >= 50000) {
      this.bg = "rgba(255, 0, 0)";
    }
    // if (this.diameter < 10) {
    //   this.bg = "rgba(72, 255, 0)";
    // } else if (this.diameter >= 10 && this.diameter < 20) {
    //   this.bg = "rgba(120, 255, 0)";
    // } else if (this.diameter >= 20 && this.diameter < 30) {
    //   this.bg = "rgba(238, 255, 0)";
    // } else if (this.diameter >= 30 && this.diameter < 40) {
    //   this.bg = "rgba(255, 208, 0)";
    // } else if (this.diameter >= 40 && this.diameter < 50) {
    //   this.bg = "rgba(255, 123, 0)";
    // } else if (this.diameter >= 50) {
    //   this.bg = "rgba(255, 0, 0)";
    // }
  }

  hover() {
    this.onHover.emit(this.country);
  }
  leave() {
    this.onLeave.emit();
  }
}
