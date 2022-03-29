function Movie(props) {
    return (
        <input
            name="movie"
            value={props.value}
            onChange={props.updateMovie}
        ></input>
    )
}


export default Movie

          // <Movie
              //   key={`movie-${idx}`}
              //   value={element}
              //   updateMovie={this.updateMovie}
              //   index={idx}
              // />