import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  // Declare a String , Object And Array
  messageFromParent = "Welcome TO Angular 8 From Parent";
  objParent = { fname: "Murali", lname: "Krishna" };
  arrayParent = ["Murali", "Ashok", "Ram", "Ravi"];
  constructor() {}

  ngOnInit() {}
}
