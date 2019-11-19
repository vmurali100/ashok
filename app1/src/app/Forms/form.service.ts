import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FormService {
  constructor(private _http: HttpClient) {}

  addUser(obj) {
    return this._http.post("http://localhost:3000/users", obj);
  }
  deleteUser(obj) {
    return this._http.delete("http://localhost:3000/users/" + obj.id);
  }
  updateUser(obj) {
    return this._http.put("http://localhost:3000/users/" + obj.id, obj);
  }
  getAllUsers() {
    return this._http.get("http://localhost:3000/users");
  }
}
