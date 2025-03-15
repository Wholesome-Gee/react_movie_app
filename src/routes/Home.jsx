import axios from 'axios'
import { useEffect, useState } from 'react'
import Movie from '../components/movie/Movie'

function Home() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    fetchMoviesData()
  },[])

  async function fetchMoviesData() {
    let response = (await axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')).data.data
    setMovies(prev => response.movies)
    setLoading(false)
  }
  
  return (
    <div>
      {
        loading ?
          <div>Loading...</div>
          :
          <div>
            {movies.map((movie)=>(
              <Movie 
                key={movie.id} 
                id={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary} 
                genres={movie.genres}
              />
            ))
            }
          </div>
      }
    </div>
  )
}

export default Home