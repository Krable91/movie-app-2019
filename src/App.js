import React from "react";
import axios from "axios";
import Clock from "react-live-clock";
import Movie from "./Movie";

import "./App.css";
/*import "./APP_example.css";*/

class App extends React.Component {
  state = {
    sortType: "",
    sortKor: "",
    isLoading: true,
    movies: [],
    moviesMenu: true
  }
  getMovies = async () => {
    const {data: { data: {movies}}} = 
    await axios.get(`https://yts-proxy.now.sh/list_movies.json?sort_by=${this.sortType}`);
    this.setState({ movies, isLoading: false })
  }
  moviesMenuChange(){
    const {moviesMenu} = this.state;
    console.log(moviesMenu);
    this.setState({moviesMenu: !moviesMenu })

  }
  sortChange(value){
    const {sortType} = this.state;
    if (value === 1) {
      this.sortType = "rating";
      this.sortKor= "평점순";
    } else if (value === 2) {
      this.sortType = "date_added";
      this.sortKor= "추가된 날짜순";
    } else if (value === 3){
      this.sortType = "title";
      this.sortKor= "제목순";
    } else if (value === 4){
      this.sortType = "year";
      this.sortKor= "제작년도순";
    } else if (value === 5){
      this.sortType = "like_count";
      this.sortKor= "선호도순";
    }
    this.setState({sortType})
    this.getMovies();
  }
  render() {
    const { isLoading, movies, moviesMenu} = this.state;
    return (
      <section className="container">
        <div className="header">

          <div className="clockContainer">
            <Clock format={`YYYY년MM월DD일`} ticking={true} timezone={`Asia/Seoul`}/>
            <Clock format={`HH시mm분ss초`} ticking={true} timezone={`Asia/Seoul`}/>
          </div>
          <div className="headerRight">  
            <div className="sortBtns">
              <button onClick={() => this.sortChange(1)}>
                평점순
              </button>
              <button onClick={() => this.sortChange(2)}>
                추가된 날짜순
              </button>
              <button onClick={() => this.sortChange(3)}>
                제목순
              </button>
              <button onClick={() => this.sortChange(4)}>
                제작년도순
              </button>
              <button onClick={() => this.sortChange(5)}>
                선호도순
              </button>
            </div>
            <div className="headerRightBottom">
              <button onClick={() => this.moviesMenuChange()}>보기방식바꾸기</button>
              {isLoading ? (
              <span>정렬 방식을 선택해주세요.</span>
              ) : (
                <span>{this.sortKor}</span>
              )}
            </div>
          </div>

        </div>  
        {isLoading ? (
          <div className="firstComent">
            <span>Waiting...</span>
          </div>
        ) : (
          <section className="container">
            {moviesMenu ? (
              <div className="moviesTrue">
                {movies.map(movie => (
                  <Movie 
                  key={movie.id}
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  rating={movie.rating}
                  runtime={movie.runtime}
                  moviesMenu={moviesMenu}
                  />
                ))} 
              </div>
            ) : (
              <div className="moviesFalse">
                {movies.map(movie => (
                  <Movie 
                  key={movie.id}
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  rating={movie.rating}
                  runtime={movie.runtime}
                  moviesMenu={moviesMenu}
                  />
                ))} 
              </div>
            )}
          </section>
        )}
      </section>
    )
  }
}
export default App;