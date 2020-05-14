import { Component, OnInit } from "@angular/core";
import { TaskAService } from "../task-a/task-a.service";
import { ICountry } from "../task-a/country";

@Component({
  selector: "app-task-b",
  templateUrl: "./task-b.component.html",
  styleUrls: ["./task-b.component.css"],
})
export class TaskBComponent implements OnInit {
  realTime: Array<ICountry> = [];
  countries: Array<ICountry> = [];
  i = 0;
  index = [];
  start = false;
  currentInfo: ICountry;
  constructor(private service: TaskAService) {}

  ngOnInit() {
    this.service.getResultLotLan().subscribe((res: any) => {
      this.countries = res.countries;
      this.index = res.index;
      console.log(this.countries);
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
