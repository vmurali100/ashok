import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FormService } from "../form.service";

@Component({
  selector: "app-module-driven",
  templateUrl: "./module-driven.component.html",
  styleUrls: ["./module-driven.component.css"]
})
export class ModuleDrivenComponent implements OnInit {
  //Creating A Form Instance

  userForm = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl()
  });
  usersFomServer: Object;
  userId;
  constructor(private formService: FormService) {}

  ngOnInit() {
    this.getAllUsers();
  }
  addUser() {
    this.formService.addUser(this.userForm.value).subscribe(res => {
      this.getAllUsers();
      this.userForm.reset();
    });
  }
  getUserFromShow(user) {
    console.log(user);
    this.userForm.get("fname").setValue(user.fname);
    this.userForm.get("lname").setValue(user.lname);
    this.userId = user.id;
  }
  getAllUsers() {
    this.formService.getAllUsers().subscribe(res => {
      this.usersFomServer = res;
    });
  }
  updateUser() {
    console.log(this.userForm.value);
    let obj = this.userForm.value;
    obj.id = this.userId;
    this.formService.updateUser(obj).subscribe(res => {
      this.getAllUsers();
      this.userForm.reset();
    });
  }
}
