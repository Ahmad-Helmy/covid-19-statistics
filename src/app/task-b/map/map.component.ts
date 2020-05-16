import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
} from "@angular/core";
import { ICountry } from "src/app/task-a/country";
import { TaskAService } from "src/app/task-a/task-a.service";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements OnInit {
  @ViewChild("AF", { static: true }) AF: ElementRef;
  @ViewChild("AO", { static: true }) AO: ElementRef;
  @ViewChild("AL", { static: true }) AL: ElementRef;
  @ViewChild("AE", { static: true }) AE: ElementRef;
  @ViewChild("AR", { static: true }) AR: ElementRef;
  @ViewChild("AM", { static: true }) AM: ElementRef;
  @ViewChild("AU", { static: true }) AU: ElementRef;
  @ViewChild("AT", { static: true }) AT: ElementRef;
  @ViewChild("AZ", { static: true }) AZ: ElementRef;
  @ViewChild("BI", { static: true }) BI: ElementRef;
  @ViewChild("BE", { static: true }) BE: ElementRef;
  @ViewChild("BJ", { static: true }) BJ: ElementRef;
  @ViewChild("BF", { static: true }) BF: ElementRef;
  @ViewChild("BD", { static: true }) BD: ElementRef;
  @ViewChild("BG", { static: true }) BG: ElementRef;
  @ViewChild("BA", { static: true }) BA: ElementRef;
  @ViewChild("BY", { static: true }) BY: ElementRef;
  @ViewChild("BZ", { static: true }) BZ: ElementRef;
  @ViewChild("BO", { static: true }) BO: ElementRef;
  @ViewChild("BR", { static: true }) BR: ElementRef;
  @ViewChild("BN", { static: true }) BN: ElementRef;
  @ViewChild("BT", { static: true }) BT: ElementRef;
  @ViewChild("BW", { static: true }) BW: ElementRef;
  @ViewChild("CF", { static: true }) CF: ElementRef;
  @ViewChild("CA", { static: true }) CA: ElementRef;
  @ViewChild("CH", { static: true }) CH: ElementRef;
  @ViewChild("CL", { static: true }) CL: ElementRef;
  @ViewChild("CN", { static: true }) CN: ElementRef;
  @ViewChild("CI", { static: true }) CI: ElementRef;
  @ViewChild("CM", { static: true }) CM: ElementRef;
  @ViewChild("CD", { static: true }) CD: ElementRef;
  @ViewChild("CG", { static: true }) CG: ElementRef;
  @ViewChild("CO", { static: true }) CO: ElementRef;
  @ViewChild("CR", { static: true }) CR: ElementRef;
  @ViewChild("CU", { static: true }) CU: ElementRef;
  @ViewChild("CZ", { static: true }) CZ: ElementRef;
  @ViewChild("DE", { static: true }) DE: ElementRef;
  @ViewChild("DJ", { static: true }) DJ: ElementRef;
  @ViewChild("DK", { static: true }) DK: ElementRef;
  @ViewChild("DO", { static: true }) DO: ElementRef;
  @ViewChild("DZ", { static: true }) DZ: ElementRef;
  @ViewChild("EC", { static: true }) EC: ElementRef;
  @ViewChild("EG", { static: true }) EG: ElementRef;
  @ViewChild("ER", { static: true }) ER: ElementRef;
  @ViewChild("EE", { static: true }) EE: ElementRef;
  @ViewChild("ET", { static: true }) ET: ElementRef;
  @ViewChild("FI", { static: true }) FI: ElementRef;
  @ViewChild("FJ", { static: true }) FJ: ElementRef;
  @ViewChild("GA", { static: true }) GA: ElementRef;
  @ViewChild("GB", { static: true }) GB: ElementRef;
  @ViewChild("GE", { static: true }) GE: ElementRef;
  @ViewChild("GH", { static: true }) GH: ElementRef;
  @ViewChild("GN", { static: true }) GN: ElementRef;
  @ViewChild("GM", { static: true }) GM: ElementRef;
  @ViewChild("GW", { static: true }) GW: ElementRef;
  @ViewChild("GQ", { static: true }) GQ: ElementRef;
  @ViewChild("GR", { static: true }) GR: ElementRef;
  @ViewChild("GL", { static: true }) GL: ElementRef;
  @ViewChild("GT", { static: true }) GT: ElementRef;
  @ViewChild("GY", { static: true }) GY: ElementRef;
  @ViewChild("HN", { static: true }) HN: ElementRef;
  @ViewChild("HR", { static: true }) HR: ElementRef;
  @ViewChild("HT", { static: true }) HT: ElementRef;
  @ViewChild("HU", { static: true }) HU: ElementRef;
  @ViewChild("ID", { static: true }) ID: ElementRef;
  @ViewChild("IN", { static: true }) IN: ElementRef;
  @ViewChild("IE", { static: true }) IE: ElementRef;
  @ViewChild("IR", { static: true }) IR: ElementRef;
  @ViewChild("IQ", { static: true }) IQ: ElementRef;
  @ViewChild("IS", { static: true }) IS: ElementRef;
  @ViewChild("IL", { static: true }) IL: ElementRef;
  @ViewChild("IT", { static: true }) IT: ElementRef;
  @ViewChild("JM", { static: true }) JM: ElementRef;
  @ViewChild("JO", { static: true }) JO: ElementRef;
  @ViewChild("JP", { static: true }) JP: ElementRef;
  @ViewChild("KZ", { static: true }) KZ: ElementRef;
  @ViewChild("KE", { static: true }) KE: ElementRef;
  @ViewChild("KG", { static: true }) KG: ElementRef;
  @ViewChild("KH", { static: true }) KH: ElementRef;
  @ViewChild("KR", { static: true }) KR: ElementRef;
  @ViewChild("KW", { static: true }) KW: ElementRef;
  @ViewChild("LA", { static: true }) LA: ElementRef;
  @ViewChild("LB", { static: true }) LB: ElementRef;
  @ViewChild("LR", { static: true }) LR: ElementRef;
  @ViewChild("LY", { static: true }) LY: ElementRef;
  @ViewChild("LK", { static: true }) LK: ElementRef;
  @ViewChild("LS", { static: true }) LS: ElementRef;
  @ViewChild("LT", { static: true }) LT: ElementRef;
  @ViewChild("LU", { static: true }) LU: ElementRef;
  @ViewChild("LV", { static: true }) LV: ElementRef;
  @ViewChild("MA", { static: true }) MA: ElementRef;
  @ViewChild("MD", { static: true }) MD: ElementRef;
  @ViewChild("MG", { static: true }) MG: ElementRef;
  @ViewChild("MX", { static: true }) MX: ElementRef;
  @ViewChild("MK", { static: true }) MK: ElementRef;
  @ViewChild("ML", { static: true }) ML: ElementRef;
  @ViewChild("MM", { static: true }) MM: ElementRef;
  @ViewChild("ME", { static: true }) ME: ElementRef;
  @ViewChild("MN", { static: true }) MN: ElementRef;
  @ViewChild("MZ", { static: true }) MZ: ElementRef;
  @ViewChild("MR", { static: true }) MR: ElementRef;
  @ViewChild("MW", { static: true }) MW: ElementRef;
  @ViewChild("MY", { static: true }) MY: ElementRef;
  @ViewChild("NA", { static: true }) NA: ElementRef;
  @ViewChild("NE", { static: true }) NE: ElementRef;
  @ViewChild("NG", { static: true }) NG: ElementRef;
  @ViewChild("NI", { static: true }) NI: ElementRef;
  @ViewChild("NL", { static: true }) NL: ElementRef;
  @ViewChild("NO", { static: true }) NO: ElementRef;
  @ViewChild("NP", { static: true }) NP: ElementRef;
  @ViewChild("NZ", { static: true }) NZ: ElementRef;
  @ViewChild("OM", { static: true }) OM: ElementRef;
  @ViewChild("PK", { static: true }) PK: ElementRef;
  @ViewChild("PA", { static: true }) PA: ElementRef;
  @ViewChild("PE", { static: true }) PE: ElementRef;
  @ViewChild("PH", { static: true }) PH: ElementRef;
  @ViewChild("PG", { static: true }) PG: ElementRef;
  @ViewChild("PL", { static: true }) PL: ElementRef;
  @ViewChild("KP", { static: true }) KP: ElementRef;
  @ViewChild("PT", { static: true }) PT: ElementRef;
  @ViewChild("PY", { static: true }) PY: ElementRef;
  @ViewChild("PS", { static: true }) PS: ElementRef;
  @ViewChild("QA", { static: true }) QA: ElementRef;
  @ViewChild("RO", { static: true }) RO: ElementRef;
  @ViewChild("RU", { static: true }) RU: ElementRef;
  @ViewChild("RW", { static: true }) RW: ElementRef;
  @ViewChild("EH", { static: true }) EH: ElementRef;
  @ViewChild("SA", { static: true }) SA: ElementRef;
  @ViewChild("SD", { static: true }) SD: ElementRef;
  @ViewChild("SS", { static: true }) SS: ElementRef;
  @ViewChild("SN", { static: true }) SN: ElementRef;
  @ViewChild("SL", { static: true }) SL: ElementRef;
  @ViewChild("SV", { static: true }) SV: ElementRef;
  @ViewChild("RS", { static: true }) RS: ElementRef;
  @ViewChild("SR", { static: true }) SR: ElementRef;
  @ViewChild("SK", { static: true }) SK: ElementRef;
  @ViewChild("SI", { static: true }) SI: ElementRef;
  @ViewChild("SE", { static: true }) SE: ElementRef;
  @ViewChild("SZ", { static: true }) SZ: ElementRef;
  @ViewChild("SY", { static: true }) SY: ElementRef;
  @ViewChild("TD", { static: true }) TD: ElementRef;
  @ViewChild("TG", { static: true }) TG: ElementRef;
  @ViewChild("TH", { static: true }) TH: ElementRef;
  @ViewChild("TJ", { static: true }) TJ: ElementRef;
  @ViewChild("TM", { static: true }) TM: ElementRef;
  @ViewChild("TL", { static: true }) TL: ElementRef;
  @ViewChild("TN", { static: true }) TN: ElementRef;
  @ViewChild("TR", { static: true }) TR: ElementRef;
  @ViewChild("TW", { static: true }) TW: ElementRef;
  @ViewChild("TZ", { static: true }) TZ: ElementRef;
  @ViewChild("UG", { static: true }) UG: ElementRef;
  @ViewChild("UA", { static: true }) UA: ElementRef;
  @ViewChild("UY", { static: true }) UY: ElementRef;
  @ViewChild("US", { static: true }) US: ElementRef;
  @ViewChild("UZ", { static: true }) UZ: ElementRef;
  @ViewChild("VE", { static: true }) VE: ElementRef;
  @ViewChild("VN", { static: true }) VN: ElementRef;
  @ViewChild("VU", { static: true }) VU: ElementRef;
  @ViewChild("YE", { static: true }) YE: ElementRef;
  @ViewChild("ZA", { static: true }) ZA: ElementRef;
  @ViewChild("ZM", { static: true }) ZM: ElementRef;
  @ViewChild("ZW", { static: true }) ZW: ElementRef;
  @ViewChild("SO", { static: true }) SO: ElementRef;
  @ViewChild("GF", { static: true }) GF: ElementRef;
  @ViewChild("FR", { static: true }) FR: ElementRef;
  @ViewChild("ES", { static: true }) ES: ElementRef;
  @ViewChild("AW", { static: true }) AW: ElementRef;
  @ViewChild("AI", { static: true }) AI: ElementRef;
  @ViewChild("AD", { static: true }) AD: ElementRef;
  @ViewChild("AG", { static: true }) AG: ElementRef;
  @ViewChild("BS", { static: true }) BS: ElementRef;
  @ViewChild("BM", { static: true }) BM: ElementRef;
  @ViewChild("BB", { static: true }) BB: ElementRef;
  @ViewChild("KM", { static: true }) KM: ElementRef;
  @ViewChild("CV", { static: true }) CV: ElementRef;
  @ViewChild("KY", { static: true }) KY: ElementRef;
  @ViewChild("DM", { static: true }) DM: ElementRef;
  @ViewChild("FK", { static: true }) FK: ElementRef;
  @ViewChild("FO", { static: true }) FO: ElementRef;
  @ViewChild("GD", { static: true }) GD: ElementRef;
  @ViewChild("HK", { static: true }) HK: ElementRef;
  @ViewChild("KN", { static: true }) KN: ElementRef;
  @ViewChild("LC", { static: true }) LC: ElementRef;
  @ViewChild("LI", { static: true }) LI: ElementRef;
  @ViewChild("MV", { static: true }) MV: ElementRef;
  @ViewChild("MT", { static: true }) MT: ElementRef;
  @ViewChild("MS", { static: true }) MS: ElementRef;
  @ViewChild("MU", { static: true }) MU: ElementRef;
  @ViewChild("NC", { static: true }) NC: ElementRef;
  @ViewChild("NR", { static: true }) NR: ElementRef;
  @ViewChild("PN", { static: true }) PN: ElementRef;
  @ViewChild("PR", { static: true }) PR: ElementRef;
  @ViewChild("PF", { static: true }) PF: ElementRef;
  @ViewChild("SG", { static: true }) SG: ElementRef;
  @ViewChild("SB", { static: true }) SB: ElementRef;
  @ViewChild("ST", { static: true }) ST: ElementRef;
  @ViewChild("SX", { static: true }) SX: ElementRef;
  @ViewChild("SC", { static: true }) SC: ElementRef;
  @ViewChild("TC", { static: true }) TC: ElementRef;
  @ViewChild("TO", { static: true }) TO: ElementRef;
  @ViewChild("TT", { static: true }) TT: ElementRef;
  @ViewChild("VC", { static: true }) VC: ElementRef;
  @ViewChild("VG", { static: true }) VG: ElementRef;
  @ViewChild("VI", { static: true }) VI: ElementRef;
  @ViewChild("CY", { static: true }) CY: ElementRef;
  @ViewChild("RE", { static: true }) RE: ElementRef;
  @ViewChild("YT", { static: true }) YT: ElementRef;
  @ViewChild("MQ", { static: true }) MQ: ElementRef;
  @ViewChild("GP", { static: true }) GP: ElementRef;
  @ViewChild("CW", { static: true }) CW: ElementRef;
  @ViewChild("IC", { static: true }) IC: ElementRef;
  realTime: Array<ICountry> = [];
  countries: Array<ICountry> = [];
  i = 0;
  date;
  index = [];
  start = false;

  constructor(private service: TaskAService) {}

  ngOnInit() {
    this.service.getResultLotLan().subscribe((res: any) => {
      this.countries = res.countries;
      this.index = res.index;
    });
    this.countries.forEach((c) => {
      if (c.cases < 1000) {
        this[c.code].style.fill = "rgba(72, 255, 0)";
      } else if (c.cases >= 1000 && c.cases < 2000) {
        this[c.code].style.fill = "rgba(170, 230, 0)";
      } else if (c.cases >= 2000 && c.cases < 5000) {
        this[c.code].style.fill = "rgba(238, 255, 0)";
      } else if (c.cases >= 5000 && c.cases < 10000) {
        this[c.code].style.fill = "rgba(255, 208, 0)";
      } else if (c.cases >= 10000 && c.cases < 50000) {
        this[c.code].style.fill = "rgba(255, 123, 0)";
      } else if (c.cases >= 50000) {
        this[c.code].style.fill = "rgba(255, 0, 0)";
      }
    });
    console.log(this.EG.nativeElement.style.fill.split(","));
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
    this.date = "";
  }

  play() {
    setTimeout(() => {
      console.log(this.i);
      if (this.i + 2 == this.index.length || !this.start) return;
      this.realTime = this.countries.slice(
        this.index[this.i],
        this.index[this.i + 1]
      );
      this.realTime.forEach((c) => {
        if (c.cases < 1000) {
          const g = 255;
          this[c.code.toUpperCase()]
            ? (this[c.code.toUpperCase()].nativeElement.style.fill =
                g < this[c.code].nativeElement.style.fill.split(",")[1]
                  ? `rgb(72, ${g}, 90)`
                  : this[c.code].nativeElement.style.fill)
            : "";
        } else if (c.cases >= 1000 && c.cases < 5000) {
          const g = 230;
          this[c.code.toUpperCase()]
            ? (this[c.code.toUpperCase()].nativeElement.style.fill =
                g < this[c.code].nativeElement.style.fill.split(",")[1]
                  ? `rgb(242, ${g}, 75)`
                  : this[c.code].nativeElement.style.fill)
            : "";
        } else if (c.cases >= 5000 && c.cases < 20000) {
          const g = 200;
          this[c.code.toUpperCase()]
            ? (this[c.code.toUpperCase()].nativeElement.style.fill =
                g < this[c.code].nativeElement.style.fill.split(",")[1]
                  ? `rgb(204, ${g}, 75)`
                  : this[c.code].nativeElement.style.fill)
            : "";
        } else if (c.cases >= 20000 && c.cases < 50000) {
          const g = 207;
          this[c.code.toUpperCase()]
            ? (this[c.code.toUpperCase()].nativeElement.style.fill =
                g < this[c.code].nativeElement.style.fill.split(",")[1]
                  ? `rgb(255, ${g}, 75)`
                  : this[c.code].nativeElement.style.fill)
            : "";
        } else if (c.cases >= 50000 && c.cases < 100000) {
          const g = 160;
          this[c.code.toUpperCase()]
            ? (this[c.code.toUpperCase()].nativeElement.style.fill =
                g < this[c.code].nativeElement.style.fill.split(",")[1]
                  ? `rgb(255, ${g}, 75)`
                  : this[c.code].nativeElement.style.fill)
            : "";
        } else if (c.cases >= 100000) {
          const g = 75;
          this[c.code.toUpperCase()]
            ? (this[c.code.toUpperCase()].nativeElement.style.fill =
                g < this[c.code].nativeElement.style.fill.split(",")[1]
                  ? `rgb(255, ${g}, 75)`
                  : this[c.code].nativeElement.style.fill)
            : "";
        }
      });
      this.date = this.realTime[0].date;
      this.i++;
      this.play();
    }, 500);
  }

  c(e) {
    console.log(e.target);
  }
}
