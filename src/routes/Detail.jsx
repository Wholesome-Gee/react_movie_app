import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Detail() {
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState(null)
  let params = useParams()
  
  useEffect(()=>{
    getMovieData()
  },[])

  async function getMovieData() {
    let response = (await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`)).data.data.movie
    setMovie(response)
    setLoading(false)
  }
  console.log(movie);
  
  return (
    <div>
      {
        loading ? 
          <div>Loading...</div>
        : 
          <h1>{movie.id}</h1>
        }

    </div>
  )
}
export default Detail