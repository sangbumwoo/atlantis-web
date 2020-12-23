import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private userService: UserService) { }

  user = { login_id: "team_manager@kfa.or.kr", passwd: "sa21c" }
  // ngOnInit(): void {
  // }

  saveToLocalStorage(user) {

  }

  deleteFromLocalStorage(user) { }



  login(user) {
    this.userService.login(user).subscribe((res: any)=> {
      localStorage.setItem("uuid", res.uuid);
      localStorage.setItem("user_id", res.user_id);
    });
  }

  info() {
    let user = { "login_id": localStorage.getItem("user_id"), "uuid": localStorage.getItem("uuid") };
    console.log('user', user);
    this.userService.info(user).subscribe((res: any)=> {
      document.getElementById("info").innerHTML = JSON.stringify(res);
    });

  }

  findAll() {
    this.userService.findAll().subscribe((data: any[]) => {
      // this.users = data;
    })
  }



}
