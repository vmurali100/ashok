import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormService } from "../Forms/form.service";

@Component({
  selector: "app-show-users",
  templateUrl: "./show-users.component.html",
  styleUrls: ["./show-users.component.css"]
})
export class ShowUsersComponent implements OnInit {
  @Input() allUsers;
  constructor(private _http: HttpClient, private formService: FormService) {}
  @Output() sendUserToParent = new EventEmitter();
  ngOnInit() {}

  deleteUser(user) {
    this.formService.deleteUser(user).subscribe(res => {
      this.getLatestUsers();
    });
  }

  getLatestUsers() {
    this.formService.getAllUsers().subscribe(users => {
      this.allUsers = users;
    });
  }

  editUser(user) {
    this.sendUserToParent.emit(user);
  }
  updateUser() {}
}
