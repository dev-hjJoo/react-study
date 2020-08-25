# Nomad Coders: 영화 웹 서비스 만들기 (movie_app)
> React JS Fundamentals Course (updated in 2019)
## REACT 환경 시작하기
### 🚩 React application 생성 명령어
* ✨create-react-app (생성할 폴더 이름)✨

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
* JavaScript와 HTML 사이으이 이러한 조합!
* react에서 등장한 소개한 유일한 개념, react에 특화된 개념!

- - -
### 🌈 가졌던 의문 해결1
> id로 연결된 건 index.js랑 index.html인데 컴포넌트는 어떻게 불러오지? 😵
* index.js 내부에 보면 &lt;App/> 를 볼 수 있다. 그것이 바로 컴포넌트!
* 이것은 파일을 모듈화해 import를 통해 불러옴!
  * import는 nodeJS 문법이야!! 최신 문법으로 ES6부터 반영되었지..
* 그런데 <b>component란?</b>
  * <u>HTML을 반환하는 함수!!!!! </u> 😲😲😲