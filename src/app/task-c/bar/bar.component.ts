import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ICountry } from "src/app/task-a/country";

@Component({
  selector: "app-bar",
  templateUrl: "./bar.component.html",
  styleUrls: ["./bar.component.css"],
})
export class BarComponent implements OnInit {
  width;
  bg;
  bottom;
  left;
  @Input() country: ICountry;
  @Output() onHover = new EventEmitter();
  @Output() onLeave = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.width = this.country.cases / 1100;
    if (this.width < 200) {
      this.bg = "rgba(72, 255, 0)";
    } else if (this.width >= 200 && this.width < 400) {
      this.bg = "rgba(120, 255, 0)";
    } else if (this.width >= 400 && this.width < 600) {
      this.bg = "rgba(238, 255, 0)";
    } else if (this.width >= 600 && this.width < 800) {
      this.bg = "rgba(255, 208, 0)";
    } else if (this.width >= 800 && this.width < 1000) {
      this.bg = "rgba(255, 123, 0)";
    } else if (this.width >= 1000) {
      this.bg = "rgba(255, 0, 0)";
    }
  }

  hover() {
    this.onHover.emit(this.country);
  }
  leave() {
    this.onLeave.emit();
  }
}
