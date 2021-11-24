import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  const movies=[
    
    {
      poster:"https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/the-avengers-2012/large_cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
      name:"Avengers",
      summary:"Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
      rating:8
    },
    {
      poster:"https://m.media-amazon.com/images/I/81+Nup8-8NL._SL1500_.jpg",
      name:"Avengers: Endgame",
      summary:"After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      rating:8.5
    },
    
    {
      poster:"https://embraceyourgeeknesseyg.files.wordpress.com/2021/03/zsjl.jpg",
      name:"Justice League",
      summary:"Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with a vast army to subjugate humans.",
      rating:8
    },
    
    
  ]

  return (
    <div className="App">
      <section className="movie-list">
        {movies.map(({poster,name,summary,rating})=> (<Movie name={name} poster={poster} summary={summary} rating={rating}/>))} 
      </section>
    </div>
  );
}

export default App;

// **********************
// import {useState} from "react";
// like counter
// function Counter(){
//   // const like=0;
//   // state - current state- current data in web app
//   // const [state,setstate] = useState(initial value)
//   // setstate updates the state
//   const [like,setLike] = useState(0)
//   const [disLike,setDisLike] = useState(0)
  
//   return (
//     <div className="btn-container">
//       <button onClick={()=>setLike(like+1)}>👍 {like}</button>
//       <button onClick={()=>setDisLike(disLike+1)}>👎 {disLike}</button>
//     </div>
//   )
// }

function Movie({poster,name,summary,rating}){
  return(
    <div className="movie-container">
      <img className="poster" src={poster} alt={name} />
        <div className="movie-specs">
          <h2 className="movie-name">{name}</h2>
          <h4 className="rating">⭐ {rating}</h4>
        </div>
        <p className="summary">{summary}</p>
        {/* <Counter /> */}
    </div>
  )
}