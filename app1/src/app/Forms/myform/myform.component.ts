import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormService } from "../form.service";

@Component({
  selector: "app-myform",
  templateUrl: "./myform.component.html",
  styleUrls: ["./myform.component.css"]
})
export class MyformComponent implements OnInit {
  usersFomServer: Object;
  constructor(private _http: HttpClient, private formService: FormService) {}

  ngOnInit() {
    this.getAllValues();
  }

  addUser(userForm) {
    this.formService.addUser(userForm.value).subscribe(res => {
      console.log("User Added");
      userForm.reset();
      this.getAllValues();
    });
  }

  getAllValues() {
    this.formService.getAllUsers().subscribe(res => {
      console.log(res);
      this.usersFomServer = res;
    });
  }
}
