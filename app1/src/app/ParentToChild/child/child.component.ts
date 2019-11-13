import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input() receiveMsg;
  @Input() receiveObj;
  @Input() receiveArray;

  // messageFromParent: any;
  // objectFromParent: any;
  // arrayFromParent: any;
  constructor() {}

  ngOnInit() {
    // console.log("Message Received From Parent ", this.receiveMsg);
    // console.log("Object Received From Parent ", this.receiveObj);
    // console.log("Array Received From Parent ", this.receiveArray);
    // this.messageFromParent = this.receiveMsg;
    // this.objectFromParent = this.receiveObj;
    // this.arrayFromParent = this.receiveArray;
  }
}
