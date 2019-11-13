import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.css"]
})
export class Child1Component implements OnInit {
  messageFromChild = "Welcome to Angular from Child";
  objFromChild = { fname: "Murali", lname: "Krishn" };
  arrayFromChild = ["Ram", "Ravi", "Murali"];

  //Custom Event Handler
  @Output() customMsgEvent = new EventEmitter();
  @Output() customObjEvent = new EventEmitter();
  @Output() customArrayEvent = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  sendMessageToParent() {
    this.customMsgEvent.emit(this.messageFromChild);
  }

  sendObjectToParent() {
    this.customObjEvent.emit(this.objFromChild);
  }

  sendArrayToParent() {
    this.customArrayEvent.emit(this.arrayFromChild);
  }
}
