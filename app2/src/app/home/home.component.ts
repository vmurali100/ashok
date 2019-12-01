import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  users: {
    fname: string;
    lname: string;
    tel: string;
    address: string;
    city: string;
    state: string;
    zip: number;
  }[];
  constructor(private userSerivice: UserService) {}

  ngOnInit() {
    this.users = this.userSerivice.getUsers();
    console.log(this.users);
  }
}
