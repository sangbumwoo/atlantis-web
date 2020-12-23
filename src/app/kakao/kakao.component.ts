import { Component, OnInit } from '@angular/core';
declare let Kakao:any;	

@Component({
  selector: 'app-kakao',
  templateUrl: './kakao.component.html',
  styleUrls: ['./kakao.component.css']
})
export class KakaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log('run script')
    // 카카오 로그인 버튼을 생성합니다.
    Kakao.Auth.createLoginButton({
        container: '#kakao-login-btn',
        success: function (authObj) {
            // alert(JSON.stringify(authObj));
        },
        fail: function (err) {
            alert(JSON.stringify(err));
        }
    });
  }

  onLogout() {
    if (!Kakao.Auth.getAccessToken()) {
      console.log('Not logged in.');
      return;
    }
    Kakao.Auth.logout(function() {
      console.log('Log-out successful');
      console.log('Kakao.Auth.getAccessToken()', Kakao.Auth.getAccessToken());
    });
  }

  onUnlink() {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function(response) {
        console.log(response);
      },
      fail: function(error) {
        console.log(error);
      },
    });
  }
}
