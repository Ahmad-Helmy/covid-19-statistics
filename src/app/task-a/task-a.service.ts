import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TaskAService {
  constructor(private http: HttpClient) {}

  getResultLotLan() {
    return this.http.get("assets/final response code (2).json");
  }

  getResult() {
    return this.http.get(
      "assets/final response.json"
      // "https://api.covid19tracking.narrativa.com/api/country/italy"
      // `https://api.covid19api.com/live/country/${country}/status/confirmed/date/2020-04-11T00:00:00Z`
    );
  }
}
