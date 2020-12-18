import { Component, OnInit } from '@angular/core';
declare let Kakao:any;	

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    Kakao.init('8b66c9658669cbfbae8710a266c8a4a4');
  }
  title = 'angular-routing-example';
}
