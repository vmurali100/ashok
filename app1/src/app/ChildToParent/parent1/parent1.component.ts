import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent1",
  templateUrl: "./parent1.component.html",
  styleUrls: ["./parent1.component.css"]
})
export class Parent1Component implements OnInit {
  messageFromChild: any;
  objFromChild: any;
  arrayFromChild: any;
  constructor() {}

  ngOnInit() {}
  // TO receive Data from Child when a custom Event Emits the Data
  receiveMessageFromChild(xyz) {
    this.messageFromChild = xyz;
  }

  recieveObjFromChild(obj) {
    this.objFromChild = obj;
  }
  receiveArrayFromChild(array) {
    this.arrayFromChild = array;
  }
}
