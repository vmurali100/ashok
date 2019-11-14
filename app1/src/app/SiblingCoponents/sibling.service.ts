import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SiblingService {
  sendMessage = new Subject();
  sendObject = new Subject();
  sendArray = new Subject();
  constructor() {}

  communicateMessage(msg) {
    this.sendMessage.next(msg);
  }
  communicateObject(obj) {
    this.sendObject.next(obj);
  }
  communicateArray(arra) {
    this.sendArray.next(arra);
  }
}
