import logo from './logo.svg';
import './App.css';
import { useState } from "react";
// import { useState } from "react";
// import { useState } from "react";
// import { useState } from "react";
// import { useState } from "react";
// import { useState } from "react";
import { MovieList } from './MovieList';
function App() {

  // const movies = [
  //   {
  //     poster: "https://doms2cents.com/wp-content/uploads/2021/09/interstellar-et00019066-19-02-2021-02-25-12.jpg",
  //     name: "Interstellar",
  //     summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  //     rating: 8.6
  //   },
  //   {
  //     poster: "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/the-avengers-2012/large_cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
  //     name: "Avengers",
  //     summary: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
  //     rating: 8
  //   },
  //   {
  //     poster: "https://m.media-amazon.com/images/I/81+Nup8-8NL._SL1500_.jpg",
  //     name: "Avengers: Endgame",
  //     summary: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
  //     rating: 8.5
  //   },
  //   {
  //     poster: "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
  //     name: "Free Guy",
  //     summary: "When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him.",
  //     rating: 7.2
  //   },
  //   {
  //     poster: "https://embraceyourgeeknesseyg.files.wordpress.com/2021/03/zsjl.jpg",
  //     name: "Justice League",
  //     summary: "Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with a vast army to subjugate humans.",
  //     rating: 8
  //   },
  //   {
  //     poster: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
  //     name: "Jumanji",
  //     summary: "Jumanji: Welcome to the Jungle is a 2017 American fantasy adventure comedy film directed by Jake Kasdan, co-written by Chris McKenna, Erik Sommers, Scott Rosenberg, and Jeff Pinkner, and starring Dwayne Johnson, Jack Black, Kevin Hart, Karen Gillan, Nick Jonas, and Bobby Cannavale.",
  //     rating: 7.8
  //   },
  //   {
  //     poster: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AM6UP5/b9e03bbc80b3461e86d0d03767755d94.jpeg/f/live-die-repeat-edge-of-tomorrow-dvd.jpeg",
  //     name: "Edge of Tomorrow",
  //     summary: "With the help of warrior Rita Vrataski, Major William Cage has to save Earth and the human race from an alien species, after being caught in a time loop.",
  //     rating: 8.5
  //   },
  //   {
  //     poster: "https://www.themoviedb.org/t/p/w500/zAurB9mNxfYRoVrVjAJJwGV3sPg.jpg",
  //     name: "Tropic Thunder",
  //     summary: "A film crew shooting a big-budget war movie are forced to become the soldiers they are portraying, when they are attacked by a gang of poppy-growing local drug dealer, due to mistaken identities.",
  //     rating: 7.5
  //   }
  // ]

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [movies, setMovies] = useState([
    {
      poster: "https://doms2cents.com/wp-content/uploads/2021/09/interstellar-et00019066-19-02-2021-02-25-12.jpg",
      name: "Interstellar",
      summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      rating: 8.6
    },
    {
      poster: "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/the-avengers-2012/large_cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
      name: "Avengers",
      summary: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
      rating: 8
    },
    {
      poster: "https://m.media-amazon.com/images/I/81+Nup8-8NL._SL1500_.jpg",
      name: "Avengers: Endgame",
      summary: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      rating: 8.5
    },
    {
      poster: "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      name: "Free Guy",
      summary: "When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him.",
      rating: 7.2
    },
    {
      poster: "https://embraceyourgeeknesseyg.files.wordpress.com/2021/03/zsjl.jpg",
      name: "Justice League",
      summary: "Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with a vast army to subjugate humans.",
      rating: 8
    },
    {
      poster: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      name: "Jumanji",
      summary: "Jumanji: Welcome to the Jungle is a 2017 American fantasy adventure comedy film directed by Jake Kasdan, co-written by Chris McKenna, Erik Sommers, Scott Rosenberg, and Jeff Pinkner, and starring Dwayne Johnson, Jack Black, Kevin Hart, Karen Gillan, Nick Jonas, and Bobby Cannavale.",
      rating: 7.8
    },
    {
      poster: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AM6UP5/b9e03bbc80b3461e86d0d03767755d94.jpeg/f/live-die-repeat-edge-of-tomorrow-dvd.jpeg",
      name: "Edge of Tomorrow",
      summary: "With the help of warrior Rita Vrataski, Major William Cage has to save Earth and the human race from an alien species, after being caught in a time loop.",
      rating: 8.5
    },
    {
      poster: "https://www.themoviedb.org/t/p/w500/zAurB9mNxfYRoVrVjAJJwGV3sPg.jpg",
      name: "Tropic Thunder",
      summary: "A film crew shooting a big-budget war movie are forced to become the soldiers they are portraying, when they are attacked by a gang of poppy-growing local drug dealer, due to mistaken identities.",
      rating: 7.5
    }
  ]);

  const resetinputs = () => {
    setName("");
    setPoster("");
    setSummary("");
    setRating("");
  }

  const addMovie = () => {
    const newMovie = { name, poster, rating, summary };
    setMovies([...movies, newMovie]);
    resetinputs();
  }
  return (
    <div className="App">
      <h1 className="main-heading">Movies</h1>
      <MovieList movies={movies}></MovieList>

      <h2>Add Movies here</h2>
      <input onChange={(event) => { setName(event.target.value) }} placeholder="Enter movie name" value={name} className="d-block my-2 form-control" />

      <input onChange={(event) => { setPoster(event.target.value) }} placeholder="Enter poster url" value={poster} className="d-block my-2 form-control" />

      <input onChange={(event) => { setSummary(event.target.value) }} placeholder="Enter movie summary" value={summary} className="d-block my-2 form-control" />

      <input onChange={(event) => { setRating(event.target.value) }} placeholder="Enter movie rating" value={rating} className="d-block my-2 form-control" />

      <button onClick={addMovie} className="btn btn-outline-primary btn-fluid">Add Movie</button>


      {/* <AddColor /> */}
      {/* <ColorBox /> */}
    </div>
  );
}

export default App;

function AddColor() {

  const [color, setColor] = useState("aqua")
  const styles = { backgroundColor: color }
  // const colors = ["pink", "orange", "crimson"]
  const [colors, setColors] = useState(["pink", "orange", "crimson"])
  return (
    <div>
      <input placeholder="Enter a color" style={styles} onChange={(event) => setColor(event.target.value)} />
      <button onClick={() => setColors([...colors, color])} >Add Color</button>

      {colors.map((clr, index) => <ColorBox key={index} color={clr} />)}

    </div>
  )
}

function ColorBox({ color }) {
  const styles = { backgroundColor: color, height: "100px", width: "300px", margin: "20px" };
  return (
    <div style={styles}></div>
  )
}