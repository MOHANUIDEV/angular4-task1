// import { DataSoreService } from './../data-sore.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  // constructor(private _dataSvc: DataSoreService) {}
  newData = [];
  loginDetails = new Login();
  ngOnInit() {
    this.loginDetails = JSON.parse(localStorage.getItem('login'));
    const home = JSON.parse(localStorage.getItem('home'));
    this.newData.push(home);
    // this.newData.push(this.loginDetails);
  }
  ngOnDestroy() {
    localStorage.setItem('login', '');
    localStorage.setItem('home', '');
  }
}
class Login {
  user_name: string;
  email: string;
  psw: string;
}
