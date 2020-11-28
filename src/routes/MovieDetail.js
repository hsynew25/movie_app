import React from "react";
import "./MovieDetail.css";

class MovieDetail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="movieDetail">
          <img src={location.state.poster} className="poster"></img>
          <div className="movieInfo">
            <div className="year">{location.state.year}</div>
            <h1 className="title">{location.state.title}</h1>
            <ul className="genres">
              {location.state.genres.map((genre, idx) => (
                <li key={idx}>{genre}</li>
              ))}
            </ul>
            <p className="summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default MovieDetail;
