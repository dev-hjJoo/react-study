# Nomad Coders: 영화 웹 서비스 만들기 (movie_app)
> React JS Fundamentals Course (updated in 2019)
## REACT 환경 시작하기
> 공통 정보
### 🚩 React application 생성 명령어
* ✨npx create-react-app (생성할 폴더 이름)✨

### 🚩 React에서 Html이 보이지 않는 이유? 🤔
* 쓰이는 모든 요소를 생성하여 JavaScript로 만들어서 HTML로 밀어 넣음!
* 모든 react application을 div 사이에 집어 넣어!
* index.js 안 ReactDOM.render는 application에 렌더링을 해!
<pre> ReactDOM.render 내부 document.getElementByID("root")
    * root는 index.js의 div id를 의미
    * 즉, react는 app.js component를 ElementByID에 넣으려고 함!
</pre>
* react는 소스코드에 처음부터 HTML을 넣지 않고, HTML에서 HTML을 추가하거나 제거하는 법을 알고 있음!
<pre> react 동작 방법 정리
 1. 빈 HTML 파일을 불러옴
 2. react가 HTML을 밀어넣음 (개발자가 component에 작성해둔 것)
 --> virtual DOM(document object model): 소스코드에 존재하지 않는 것을 만들어 내는 것!
</pre>

### 🚩 드디어 나온다! JSX!
* <b>J</b>ava<b>S</b>cript <b>X</b>ML
* JavaScript와 HTML 사이의 이러한 조합!
* react에서 등장한 소개한 유일한 개념, react에 특화된 개념!
- - -
> first-App.js 파일과 함께 보면 보다 더 쉽게 확인 가능
### 🚩 컴포넌트에 대한 정보1
* ReactDOM.render() 내부에 <b>하나의 컴포넌트만</b> 가능!
* 예시 (불가능, 컴포넌트가 2개)
<pre> <code>ReactDOM.render(
    &ltApp /> &ltPotato/>,
  document.getElementById('potato')
);
</code></pre>
* 컴포넌트 함수는 <b>대문자</b>로 시작!
* 같은 파일 내 컴포넌트 여러 개 생성 가능!!
* HTML 태그와 마찬가지로 속성 값(프로퍼티)을 보내 컴포넌트에 값 전달 가능
  * 여러 개의 프로퍼티를 보내도 컴포넌트에서는 하나의 오브젝트로 받음
  <pre> web에서의 attribute와 property의 차이 
    * attribute: html document/file 내부 존재
    * property: html DOM tree 내부 존재
    -> attribute는 정적, 변하지 않음. property는 동적, 변함.
    ❕ 즉, <b>attribute는 html 문서 내 정적인 속성</b>을 의미하고 <b>property는 동적인 속성</b>을 의미함.
  </pre>

### 🚩 배열을 가져오자! <b>map!</b>과 함수 형태
* map은 array의 각 item에서 function을 실행하는 JavaScript function
* 그 function의 result를 갖는 array를 반환
 <pre>
friends.map(current => {
    console.log(current);
    return 0;
})
</pre>
에서 current를 매개변수로 하는 함수가 map 함수 내부에 작성되어있음을 알 수 있다.
<pre>
* current => { }
와 동일한 형식
* function(current) {}
</pre>
* 예를 들어 모든 인자에 하트(💕)를 붙이고 싶다면?
<pre>
friends.map(current => {
    current = current + "💕";
    console.log(current);
    return current;
});
</pre>
> 실행 결과
<pre>
dal💕
mark💕
lynn💕
china guy💕
(4) ["dal💕", "mark💕", "lynn💕", "china guy💕"]
</pre>

### 🚩 이미지에 부여하는 <b>alt</b> property
* 시각 장애인들을 위한 데이터
* 각각의 이미지를 구분하기 위한 정보를 제공

### 🚩 nodeJS의 prop-types
> 설치 방법 <b>npm i prop-types</b>
* 역할: 내가 전달받은 props가 내가 원하는 props인지 확인
* 자료형을 확인할 뿐만 아니라, 전달받아야 하는데 오지 않았다던지 하는 등의 확인 절차도 수행.
* 자료형도 string, number 뿐만 아니라 array, boolean, object 등 모두 체크 가능
* 또한 isRequired를 호출하는 방식으로 type과 required 모두 체크할 수도 있음.
* PropType을 설정할 때, 이름은 무조건 propTypes라고 지어야 함. (sexyTypes라고 지으면 안 돼)
  * 왜냐하면 그렇지 않을 경우 react가 확인을 하지 않음.

- - -
> second-App.js 파일과 함께 보면 이해가 쉬움
### 🚩 <b>state</b>? dynamic data!
* 보통 동적 데이터와 함께 작업할 때 만들어지는 데이터.
* 변하지만 존재하지 않는 데이터!
* 생겨나고 사라지고 변경되는 데이터. 하나인 데이터가 두 개가 되고 또 0이 되는 그런 종류의 것들!
* React.Component 내부에 들어 있음
* state는 object이고 component의 data를 넣을 공간이 있음. 그리고 이 데이터는 변함.

### 🚩<b>function</b> component VS <b>class</b> component
* class Component는 return을 가지지 않아. 왜냐? function이 아니기 때문!
* 대신 render라는 메소드를 가지고 있음.
<pre>
// function component
function App() {
  return (
    &ltdiv>
      ...
    &lt/div>
  );
}
</pre>
* Function component는 function이고, 무언가를 return함. 그리고 그것을 screen에 띄움.
<pre>
// class component
class App extends React.component {
  render() {
    return (
      &ltdiv>
      &lt/div>
    )
  }
}
</pre>
* Class component는 class, react component로 부터 확장되고 render메소드를 통해 반환하여 screen에 표시함.
* 🥁Class Component를 알아야 하는 이유?🥁
  * Class component가 바로 <b>state</b>를 가지고 있기 때문 ! ! ! ! ! ! !

### 🚩 state 변경 시에는 set을 사용하자!
> 사용법: this.setState(변경할 값 코드);
* 우리가 setState function을 호출하면 react는 매우 똑똑!
* 언제 호출할 지를 알고, 언제 view를 refresh 하고 싶은 지 알고, render function을 refresh 하고 싶은 지 안다!
* 그리고 react는 변화가 있는 부분만 refresh!
<pre>
 🥁<b>매 순간 setState를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출!</b>🥁
</pre>

### 🚩 외부의 상태에 의존하지 않는 방법? current 변수로 this.state 불러오기!
> 그런데 말야 this.state.count와 같이 접근하는 거 넘 우 별로지 않니?
* 그런 당신이라면! 아래 코드를 참고 ! ! ! !
<pre>
this.setState({count: this.state.count+1})
</pre>
* 위 코드 대신
<pre>
this.setState(current => ({count: current.count+1}) );
</pre>
* 이 코드를 사용하자! 외부의 상태에 의존하지 않는 가장 좋은 방법!
* 참고로 변수 이름은 무관해!

### 🚩 Mounting
<pre> component life cycle
 * <b>Mounting</b>: 태어나는 것과 같음
 * Updating: 일반적인 업데이팅
 * UnMounting: component가 죽는 것을 의미 => 페이지를 바꿀 때!
</pre>
> <b>마운트(mount)</b>란? 컴퓨터 과학에서 저장 장치에 접근할 수 있는 경로를 디렉터리 구조에 편입시키는 작업
 * constructor()
   * JavaScript 문법으로, render()보다 먼저 실행됨! 1번 작업!
   * Component가 mount될 때, component가 screen에 표시될 때 constructor을 호출
 * getDerivedStateFromProps()
   * 해당 영상에서 범위를 벗어나므로 다루지 않음
 * render()
   * 1번 작업 수행 후 render!
   * 변경될 때 마다 호출되네? 그건 업데이트!
 * componentDidMount()
   * render 할 때 "이봐 이 component는 처음 render됐어!"를 알려주는 친구

### 🚩 Updating
> 업데이트의 원인은 바로 너! 변화를 줘서 state를 변경하는 것, 그것이 update!
* getDerivedStateFromProps()
  * 업데이트 시 호출, 해당 강의에서 이야기 하지 않음.
* shouldComponentUpdate()
  * 기본적으로 업데이트 할 지 말지 결정하는 것, 얘도 해당 강의에서 이야기 하지 않음.
* render (위에서 설명했지?)
* componentDidUpdate()
  * 변경될 때 마다 render 호출된 이후 업데이트가 완료되면 해당 함수 호출!

### 🚩 Unmount
> 이건... compoonent가 죽을 때.....
* componentWillUnmount()
  * component의 마지막 순간, 다른 페이지로 가는 등의 컴포넌트가 없어질 때 호출.

- - -
> App.js, Movie.js와 함께 보면 좋음.
> 해당 부분은 앱을 만들면서 설명하는 부분이 많아 주석으로 많이 설명하겠음.
### 🚩 fetch와 axios
* axios는 fetch 위에 있는 작은 layer라고 보면 돼!

### 🚩 Component를 예쁘게 꾸미고 싶다면? <b>style component</b>!
<pre> <b>태그 내 css 옵션 넣기</b>
* 사용 방법: 태그 내에서 style={{ -- }}
* 주의: 중괄호 2개!!! 
</pre>
<pre> <b> css파일 만들기 </b>
* 동일한 파일 이름으로 CSS 파일을 생성해서 CSS 파일 편집
</pre>




- - -
### 🙋 좀 더 알아보기
* [React.strict-mode](https://ko.reactjs.org/docs/strict-mode.html) 


- - -
### 🌈 가졌던 의문 해결1
> id로 연결된 건 index.js랑 index.html인데 컴포넌트는 어떻게 불러오지? 😵
* index.js 내부에 보면 &lt;App/> 를 볼 수 있다. 그것이 바로 컴포넌트!
* 이것은 파일을 모듈화해 import를 통해 불러옴!
  * import는 nodeJS 문법이야!! 최신 문법으로 ES6부터 반영되었지..
* 그런데 <b>component란?</b>
  * <u>HTML을 반환하는 함수!!!!! </u> 😲😲😲

### 🌈 가졌던 의문 해결2
> <font color="#e74c3c"> Warning: Each child in a list should have a unique "key" prop. </font> 라는 메세지가 뜬다면?
* 유일성을 잃어버린 경우로, list 내 각각의 child는 unique한 key prop을 가져야 함.
* 따라서 각각 기능상 사용되지 않는 key로서만 작동할 값(예: id)을 생성.
* 이는 기본적으로 react 내부적으로 사용하기 위한 값