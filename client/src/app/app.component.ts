import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = 'Dating App';
 
  constructor(private accountService:AccountService){

  }
  ngOnInit() {
    this.setCurrentUser();
  }
 
  setCurrentUser(){

    const userString = localStorage.getItem('user')
    if(!userString) return;

    const user:User = JSON.parse(userString);
    this.accountService.setCurrentUser(user)
  }
 
}
