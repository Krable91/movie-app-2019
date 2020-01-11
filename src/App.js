import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
/*import "./APP_example.css";*/

class App extends React.Component {
  state = {
    sortType: "",
    sortKor: "",
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    const {data: { data: {movies}}} = 
    await axios.get(`https://yts-proxy.now.sh/list_movies.json?sort_by=${this.sortType}`);
    this.setState({ movies, isLoading: false })
  }
  sortChange(value){
    const {sortType, sortKor} = this.state;
    if (value === 1) {
      this.sortType = "rating";
      this.sortKor= "별점순";
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
      this.sortKor= "좋아요순";
    }
    this.setState({sortType})
    this.getMovies();
  }
  render() {
    const { isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="header">
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
                좋아요순
              </button>
              </div>
              <span>정렬 방법을 선택해주세요.</span>
          </div> 
        ) : (
        <div>
          <div className="header">
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
                좋아요순
              </button>
              </div>
              <span>현재 정렬 방식은 '{this.sortKor}' 입니다.</span>
          </div> 
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
        )}
      </section>
    )
  }
}
export default App;