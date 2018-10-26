import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { DataSoreService } from '../data-sore.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup;
  userData = [];
  constructor(private _fb: FormBuilder, private _router: Router) {
    this.userForm = this._fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      age: ['']
    });
  }

  ngOnInit() {}
  saveData(model) {
    this.userData.push(model);
    localStorage.setItem('home', JSON.stringify(model));
    this._router.navigate(['Profile']);
  }
}
