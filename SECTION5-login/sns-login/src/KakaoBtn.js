import React from 'react';
import KakaoLogin from 'react-kakao-login'

function KakaoBtn() {

    function loginWithKakao() {
        Kakao.Auth.authorize({
            redirectUri: 'https://developers.kakao.com/tool/demo/oauth'
        })
      }
      // 아래는 데모를 위한 UI 코드입니다.
      getToken()
      function getToken() {
        const token = getCookie('authorize-access-token')
        if(token) {
          Kakao.Auth.setAccessToken(token)
          document.getElementById('token-result').innerText = 'login success. token: ' + Kakao.Auth.getAccessToken()
        }
      }
      function getCookie(name) {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
      }

    return (
        <div>
            <a id="custom-login-btn" href="javascript:loginWithKakao()">
                <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222"/>
            </a>
            <p id="token-result"></p>
        </div>
    );
}

export default KakaoBtn;