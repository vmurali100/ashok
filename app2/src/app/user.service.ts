import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}
  getUsers() {
    return users;
  }
}

let users = [
  {
    fname: "Carla",
    lname: "Brittin",
    tel: "(377)357-3977",
    address: "4974 Magna Ln",
    city: "Wahiawa",
    state: "OK",
    zip: 69795
  },
  {
    fname: "Joe",
    lname: "Cain",
    tel: "(954)181-6705",
    address: "6522 Sed St",
    city: "Monmouth Beach",
    state: "MI",
    zip: 44016
  },
  {
    fname: "Nichelle",
    lname: "Tollund",
    tel: "(721)485-6893",
    address: "3637 Et Ln",
    city: "Temecula",
    state: "NJ",
    zip: 57288
  },
  {
    fname: "Cenna",
    lname: "Emerson",
    tel: "(147)337-3471",
    address: "6574 Quis Dr",
    city: "Clearwater",
    state: "OR",
    zip: 18289
  },
  {
    fname: "Latonia",
    lname: "Murphy",
    tel: "(403)271-6073",
    address: "5832 Libero Ct",
    city: "Grand Forks",
    state: "OR",
    zip: 20250
  },
  {
    fname: "Gueorgui",
    lname: "Hencmann",
    tel: "(677)426-4482",
    address: "8846 Lectus Dr",
    city: "San Antonio",
    state: "PA",
    zip: 40135
  },
  {
    fname: "Stan",
    lname: "Bednarsh",
    tel: "(763)341-4607",
    address: "7621 Consectetur Ln",
    city: "Oklahoma",
    state: "MT",
    zip: 68867
  },
  {
    fname: "Valesa",
    lname: "Millegan",
    tel: "(910)657-0407",
    address: "4886 Velit Ave",
    city: "Coffeeville",
    state: "ME",
    zip: 94612
  },
  {
    fname: "Hiam",
    lname: "Walters",
    tel: "(112)187-4675",
    address: "2226 Amet Ln",
    city: "Macomb",
    state: "UT",
    zip: 85081
  },
  {
    fname: "Pauline",
    lname: "Fournier",
    tel: "(698)506-6303",
    address: "9910 Pulvinar Ln",
    city: "Christiana",
    state: "GA",
    zip: 26324
  }
];
