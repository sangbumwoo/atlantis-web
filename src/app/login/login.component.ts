import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService) { }

  user = { login_id: "team_manager@kfa.or.kr", passwd: "sa21c" }
  ngOnInit(): void {
  }

  login(user) {
    this.userService.login(user).subscribe((res: any) => {
      localStorage.setItem("uuid", res.uuid);
      localStorage.setItem("user_id", res.user_id);
      document.getElementById("info").innerHTML = '';
      alert('login');
    });
  }

  logout() {
    let user = { "user_id": localStorage.getItem("user_id"), "uuid": localStorage.getItem("uuid") };
    this.userService.logout(user).subscribe((res: any) => {
      localStorage.removeItem("uuid");
      localStorage.removeItem("user_id");
      document.getElementById("info").innerHTML = '';
      setTimeout(() => { alert('logout') }, 500);
    });
  }

  info() {
    let user = { "user_id": localStorage.getItem("user_id"), "uuid": localStorage.getItem("uuid") };
    if (!user.user_id || !user.uuid) {
      alert("user null");
    } else {
      this.userService.info(user).subscribe((res: any) => {
        document.getElementById("info").innerHTML = JSON.stringify(res);
        setTimeout(() => { alert('success') }, 500);
      });
    }
  }

}
