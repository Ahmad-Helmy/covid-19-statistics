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
  date;
  countries: Array<ICountry> = [];
  i = 0;
  index = [];
  vgrid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  hgrid = [
    { index: 0, value: 90 * Math.log(1) },
    { index: 0.5, value: 90 * Math.log(3250 * 1) },
    { index: 1, value: 90 * Math.log(3250 * 2) },
    { index: 1.5, value: 90 * Math.log(3250 * 3) },
    { index: 2, value: 90 * Math.log(3250 * 4) },
    { index: 2.5, value: 90 * Math.log(3250 * 5) },
    { index: 3, value: 90 * Math.log(3250 * 6) },
    { index: 3.5, value: 90 * Math.log(3250 * 7) },
    { index: 4, value: 90 * Math.log(3250 * 8) },
    { index: 4.5, value: 90 * Math.log(3250 * 9) },
    { index: 5, value: 90 * Math.log(3250 * 10) },
    { index: 5.5, value: 90 * Math.log(3250 * 11) },
    { index: 6, value: 90 * Math.log(3250 * 12) },
    { index: 6.5, value: 90 * Math.log(3250 * 13) },
    { index: 7, value: 90 * Math.log(3250 * 14) },
    { index: 7.5, value: 90 * Math.log(3250 * 15) },
    { index: 8, value: 90 * Math.log(3250 * 16) },
    { index: 8.5, value: 90 * Math.log(3250 * 17) },
    { index: 9, value: 90 * Math.log(3250 * 18) },
    { index: 9.5, value: 90 * Math.log(3250 * 19) },
    { index: 10, value: 90 * Math.log(3250 * 20) },
  ];
  // hgrid = [
  //   90 * Math.log(0),
  //   90 * Math.log(50000),
  //   90 * Math.log(100000),
  //   90 * Math.log(150000),
  //   90 * Math.log(200000),
  //   90 * Math.log(250000),
  //   90 * Math.log(300000),
  //   90 * Math.log(350000),
  //   90 * Math.log(400000),
  //   90 * Math.log(450000),
  //   90 * Math.log(500000),
  //   90 * Math.log(550000),
  //   90 * Math.log(600000),
  //   90 * Math.log(650000),
  //   90 * Math.log(700000),
  //   90 * Math.log(750000),
  //   90 * Math.log(800000),
  //   90 * Math.log(850000),
  //   90 * Math.log(900000),
  //   90 * Math.log(950000),
  //   90 * Math.log(1000000),
  // ];
  // hgrid = [
  //   0,
  //   0.5,
  //   1,
  //   1.5,
  //   2,
  //   2.5,
  //   3,
  //   3.5,
  //   4,
  //   4.5,
  //   5,
  //   5.5,
  //   6,
  //   6.5,
  //   7,
  //   7.5,
  //   8,
  //   8.5,
  //   9,
  //   9.5,
  //   10,
  // ];
  start = false;
  currentInfo: ICountry;

  constructor(private service: TaskAService) {}

  ngOnInit() {
    this.service.getResult().subscribe((res: any) => {
      this.countries = res.countries;
      this.index = res.index;
      console.log("finished");
    });
    console.log(90 * Math.log(2));
  }

  testStart() {
    if (!this.start) {
      this.start = true;
      this.play();
    }
  }
  testPause() {
    this.start = false;
  }
  testStop() {
    this.start = false;
    this.realTime = [];
    this.i = 0;
    this.date = "";
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
      if (this.i + 1 == this.index.length || !this.start) return;
      this.realTime = this.countries.slice(
        this.index[this.i],
        this.index[this.i + 1]
      );
      this.date = this.realTime[0].date;
      this.i++;
      this.play();
    }, 500);
  }
}
