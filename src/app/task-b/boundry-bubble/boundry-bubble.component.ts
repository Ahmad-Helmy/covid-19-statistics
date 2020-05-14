import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { ICountry } from "src/app/task-a/country";

@Component({
  selector: "app-boundry-bubble",
  templateUrl: "./boundry-bubble.component.html",
  styleUrls: ["./boundry-bubble.component.css"],
})
export class BoundryBubbleComponent implements OnInit {
  diameter;
  bg;
  bottom;
  left;
  @Input() country: ICountry;
  @Output() onHover = new EventEmitter();
  @Output() onLeave = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.left = 450 + this.country.Lon * 2.5;
    this.bottom = 338 + this.country.Lat * 3.7;
    this.diameter = 1.5 * Math.log(this.country.cases);
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
