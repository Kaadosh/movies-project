import React from "react";

function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;

  return (
    <div className="row movie" id={imdbID}>
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            {Poster === "N/A" ? (
              <img src={`https://placehold.co/300x500?text=${Title}`} />
            ) : (
              <img src={Poster} />
            )}
            <span className="card-title">{Title}</span>
          </div>
          <div className="card-content">
            <p>
              {Year}
              <span className="right">{Type}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
