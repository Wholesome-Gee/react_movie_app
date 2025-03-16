import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"

function Detail() {
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState(null)
  const location = useLocation()
  const key = '24341c1e87d5ddd2030f25d02fbac2ea'
  let {id} = useParams()
  
  
  
  console.log(id);
  useEffect(() => {
    fetchMovieData()
  }, [])
  
  async function fetchMovieData() {
    let response = (await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${id}`)).data.movieInfoResult.movieInfo
    console.log(response);
      
  }
  
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