import { Component, OnInit } from "@angular/core";
import { SiblingService } from "../sibling.service";

@Component({
  selector: "app-comp-b",
  templateUrl: "./comp-b.component.html",
  styleUrls: ["./comp-b.component.css"]
})
export class CompBComponent implements OnInit {
  // messageFromCompA: any = "";
  // objectFromCompA: any = "";
  // arrayFromCompA: any = "";
  messageFromCompA: any;
  objectFromCompA: any;
  arrayFromCompA: any;
  constructor(private sibService: SiblingService) {}

  ngOnInit() {
    this.sibService.sendMessage.subscribe(message => {
      console.log(message);
      this.messageFromCompA = message;
    });

    this.sibService.sendObject.subscribe(obj => {
      console.log(obj);
      this.objectFromCompA = obj;
    });
    this.sibService.sendArray.subscribe(array => {
      console.log(array);
      this.arrayFromCompA = array;
    });
  }
}
