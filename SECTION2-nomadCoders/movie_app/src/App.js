import React from 'react';

// 매개변수로 중괄호를 받지 않고 받으면 객체로 들어옴
// 따라서 props로 받았다면 pros.favrite으로 접근
// 하지만 favorite에 바로 접근하고 싶을 때에는 아래와 같이 {속성 이름}을 사용
function Food({ favorite }) {
  console.log(favorite)
  return(
    <h1> I love </h1>
  );
}

// 배열 생성 후, 배열을 이용하여 모든 component를 렌더링
const foodILike = [
  {
    name: "cookie",
    image: "../img/cookie.png"
  },
  {
    name: "onigiri",
    image: "../img/onigiri.png"
  },
  {
    name: "pizza",
    image: "../img/pizza.png"
  },
  {
    name: "sushi",
    image: "../img/sushi.png"
  },
  {
    name: "buritto",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IPA73pF6GXq4ReAeK0T4QAHaFj%26pid%3DApi&f=1"
  },
  {
    name: "hamburger",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.theconversation.com%2Ffiles%2F180401%2Foriginal%2Ffile-20170731-22175-67v3q2.jpg%3Fixlib%3Drb-1.1.0%26rect%3D0%2C589%2C5472%2C2654%26q%3D45%26auto%3Dformat%26w%3D1356%26h%3D668%26fit%3Dcrop&f=1&nofb=1"
  }
]

function App() {
  return (
    /* HELLO가 브라우저 내 코드에서 보이지 않는 이유?
     = 보여지는 것은 빈 index.html 파일
    */
   // JSX + props의 힘으로 컴포넌트 모두 재사용 가능
    <div>
      <h1>HELLO!!!</h1>
      <Food favorite="watermelon" />
      <Food favorite="sushi" />
      <Food favorite="ten-dong" />
      <Food favorite="mara-tang" />
      <Food favorite="mara-shangguo" />
    </div>
  );
}

export default App;
