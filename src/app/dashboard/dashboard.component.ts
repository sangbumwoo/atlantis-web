import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users = [];
  newUser = { fullName:"테스트유저", birthday: "1984-01-01", isActive: "false"};
  fullName: string = "";
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  create(user) {
    this.userService.create(user).subscribe(res => {
      alert("created");
    });
  }

  findAll() {
    this.userService.findAll().subscribe( (data: any[]) => {
      this.users = data;
    })
  }

  findOne(id) {
    this.userService.findOne(id).subscribe( (data: any) => {
      alert(data.fullName);
    })
  }

  update(user) {
    this.userService.update(user).subscribe(res => {
      alert("updated");
    });  }

  delete(id) {
    this.userService.delete(id).subscribe(res=> {
      alert("deleted");
    });
  }

}
