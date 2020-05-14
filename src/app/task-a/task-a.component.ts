import { Component, OnInit } from "@angular/core";
import { TaskAService } from "./task-a.service";
import { ICountry } from "./country";

@Component({
  selector: "app-task-a",
  templateUrl: "./task-a.component.html",
  styleUrls: ["./task-a.component.css"],
})
export class TaskAComponent implements OnInit {
  realTime: Array<ICountry> = [];
  countries: Array<ICountry> = [];
  i = 0;
  index = [];
  vgrid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  hgrid = [
    0,
    0.5,
    1,
    1.5,
    2,
    2.5,
    3,
    3.5,
    4,
    4.5,
    5,
    5.5,
    6,
    6.5,
    7,
    7.5,
    8,
    8.5,
    9,
    9.5,
    10,
  ];
  start = false;
  currentInfo: ICountry;

  constructor(private service: TaskAService) {}

  ngOnInit() {
    this.service.getResult().subscribe((res: any) => {
      this.countries = res.countries;
      this.index = res.index;
      console.log("finished");
    });
  }

  testStart() {
    this.start = true;
    this.play();
  }
  testPause() {
    this.start = false;
  }
  testStop() {
    this.start = false;
    this.realTime = [];
    this.i = 0;
  }
  hover(e) {
    this.currentInfo = e;
    this.testPause();
  }
  leave(e) {
    this.currentInfo = null;
    this.testStart();
  }

  play() {
    setTimeout(() => {
      console.log(this.i);
      if (this.i + 4 == this.index.length || !this.start) return;
      this.realTime = this.countries.slice(
        this.index[this.i],
        this.index[this.i + 1]
      );
      this.i++;
      this.play();
    }, 500);
  }
}
