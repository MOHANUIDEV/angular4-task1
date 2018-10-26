import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
// import { DataSoreService } from '../data-sore.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private _fb: FormBuilder, private route: Router) {}

  ngOnInit() {
    this.loginForm = this._fb.group({
      user_name: ['', Validators.required],
      email: ['', Validators.required],
      psw: ['', Validators.required]
    });
    // this._dataStore.getItem().subscribe((res) => console.log(res));
  }
  login(model) {
    if (model.email === 'venky@gmail.com' && model.psw === 'venky@123') {
      this.route.navigate(['Home']);
      localStorage.setItem('login', JSON.stringify(model));
      const details = { login: model };
      // this._dataStore.setItem(details);
    } else {
      alert('please fill the valid email and password');
    }
  }
}
