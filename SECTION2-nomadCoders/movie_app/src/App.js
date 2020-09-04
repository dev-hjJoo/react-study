import React from 'react';
import axios from 'axios';
import Movie from './Movie'
import "./App.css"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  // async를 넣은 것은, 이 함수가 비동기라고 알려준 것! (너는 이걸 기다려야한다고 알려준 것!)
  getMovies = async () => {
    // 내부의 await은 "무엇을" 기다려야 하는 지 알려준 것
    // 즉, axios.get("--") 부분을 기다려야 한다!!!고 알려준거지
    // await은 async를 써주어야만 쓸 수 있어
    
    /*
    // 아래 코드를 ES6에 맞게 코드를 바꿔볼까?
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(movies.data.data.movies);
    */
    const {
      data: {
        data : { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    
    // 그러면 위의 코드를? setState에 넣어야지!
    // 앞의 것은 state의 movies, 나머지 하나는 axios에서 온 movies
    this.setState({ movies:movies, isLoading: false });

  }

  async componentDidMount() {
    /*
    // delay function
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 6000)
    */

    // 우리가 해야 할 일은 데이터 잡기!
    // json 파일은 무수한 정보를 주지만 그 중에 필요한 data를 잡을 필요가 있어!
    // axios는 늘 조금씩 느려.
    // 그래서 javascript에게 componentDidMount 함수가 끝날 때까지 약간 시간이 걸릴 수 있다고 전달해야해!
    // 그걸 위해 우리는 componenetDidMount 앞에 async를 넣을거야 (오? ellie 수업에서 들은 것 같은데?)
    // 또한 해당 기능을 넣은 getMovies도 살짝 바꿔보자!
    this.getMovies();
  };

  render() {
    // 할 때 마다 this.state.isLoading 치고 싶지 않아!
    // 그래서 아래 코드를 써 줘
    const { isLoading, movies } = this.state;

    return <section className="container">
      { isLoading ? (
        <div className="loader">
          <span className="loader__text"> Loading... </span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie => (
      
            <Movie
              key={movie.id}
              year={movie.year}
              rating={movie.rating}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
       )
      }
    </section>;
  }
}

export default App;
