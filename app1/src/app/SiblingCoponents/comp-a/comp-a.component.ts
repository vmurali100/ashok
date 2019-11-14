import { Component, OnInit } from "@angular/core";
import { SiblingService } from "../sibling.service";

@Component({
  selector: "app-comp-a",
  templateUrl: "./comp-a.component.html",
  styleUrls: ["./comp-a.component.css"]
})
export class CompAComponent implements OnInit {
  messageFromCompA = "Hello Angular , I am From CompA";
  objectFromCompA = {
    fname: "Murali",
    lname: "Krishna"
  };
  arrayFromCompA = ["Ashok", "Mallesh", "Murali"];
  constructor(private sibSerive: SiblingService) {}

  ngOnInit() {}

  sendInfoToCompB() {
    this.sibSerive.communicateMessage(this.messageFromCompA);
  }

  sendObjectToCompB() {
    this.sibSerive.communicateObject(this.objectFromCompA);
  }

  sendArrayToCompB() {
    this.sibSerive.communicateArray(this.arrayFromCompA);
  }
}
