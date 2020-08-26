import React from 'react';
import PropTypes from 'prop-types';

// 매개변수로 중괄호를 받지 않고 받으면 객체로 들어옴
// 따라서 props로 받았다면 pros.favrite으로 접근
// 하지만 favorite에 바로 접근하고 싶을 때에는 아래와 같이 {속성 이름}을 사용
function Food({ name, picture, rating }) {
  console.log(name)

  if(rating == null) rating="-"

  return(
    <div>
      <h2> I love {name} </h2>
      <h4> {rating} / 5.0  </h4>
      <img src={picture} width={100} alt={name}/>
    </div>
  );
}

// PropType은 무조건 propTypes 라고 이름 지어야 함! 그래야 react가 확인해!
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

// 배열 생성 후, 배열을 이용하여 모든 component를 렌더링하자!
const foodILike = [
  {
    // id를 부여하고 컴포넌트를 생성 시 id값을 부여하자
    id:1,
    name: "cookie",
    image: "https://image.flaticon.com/icons/svg/786/786909.svg",
    rating: 3
  },
  {
    id:2,
    name: "onigiri",
    image: "https://image.flaticon.com/icons/svg/786/786915.svg",
  },
  {
    id:3,
    name: "pizza",
    image: "https://image.flaticon.com/icons/svg/786/786930.svg",
    rating: 4
  },
  {
    id:4,
    name: "sushi",
    image: "https://image.flaticon.com/icons/svg/786/786903.svg",
    rating: 4.8
  }
]

function renderFood(dish) {
  console.log(dish)
  // 해당 key값은 food로 전달되지 않아! key로서만 사용하고, food에서는 사용될 일이 없기 때문!
  // react 내부에서 사용하기 위함
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating = {dish.rating}/>
}

function App() {
  return (
    /* HELLO가 브라우저 내 코드에서 보이지 않는 이유?
     = 보여지는 것은 빈 index.html 파일
    */
   // JSX + props의 힘으로 컴포넌트 모두 재사용 가능
   /*
   // 아래 방식은 유일성을 잃어버려! 각각 list 내의 child는 unique한 key prop을 가져야 해.
   // 따라서 우리는 배열(상단, foodILike)에 id를 부여하자
    <div>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} /> )}
    </div>
    */
   <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
